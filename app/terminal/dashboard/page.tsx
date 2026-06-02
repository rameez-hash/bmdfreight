'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Copy, Check, RefreshCw, LogOut, Plus, Trash2, ExternalLink, DollarSign, CreditCard, Mail, User, FileText, X } from 'lucide-react';

interface PaymentLink {
  id: string;
  uniqueId: string;
  clientName: string;
  clientEmail: string;
  amount: number;
  currency: string;
  status: string;
  description: string | null;
  stripeId: string | null;
  createdAt: string;
}

export default function Dashboard() {
  const [links, setLinks] = useState<PaymentLink[]>([]);
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    amount: '',
    currency: 'USD',
    description: '',
  });
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState<PaymentLink | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);

  const checkAuth = () => {
    const token = localStorage.getItem('terminal_token');
    if (!token) {
      window.location.href = '/terminal/login';
      return false;
    }
    return token;
  };

  const fetchLinks = async () => {
    const token = checkAuth();
    if (!token) return;
    
    const res = await fetch('/api/terminal/links', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.status === 401) {
      localStorage.removeItem('terminal_token');
      window.location.href = '/terminal/login';
      return;
    }
    if (res.ok) {
      const data = await res.json();
      setLinks(data.links);
    }
  };

  useEffect(() => {
    checkAuth();
    fetchLinks();

    // Handle browser back button
    const handlePopState = () => {
      checkAuth();
    };
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('terminal_token');

    try {
      const res = await fetch('/api/terminal/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        setGeneratedUrl(data.paymentUrl);
        setShowModal(true);
        setFormData({ clientName: '', clientEmail: '', amount: '', currency: 'USD', description: '' });
        fetchLinks();
      }
    } catch {
      alert('Failed to create link');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this payment link?')) return;
    
    setDeleteLoading(id);
    const token = localStorage.getItem('terminal_token');

    try {
      const res = await fetch(`/api/terminal/links?id=${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        fetchLinks();
      } else {
        alert('Failed to delete link');
      }
    } catch {
      alert('Failed to delete link');
    } finally {
      setDeleteLoading(null);
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const logout = () => {
    localStorage.removeItem('terminal_token');
    window.location.href = '/terminal/login';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'pending':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid':
        return <Check size={14} className="text-emerald-400" />;
      case 'pending':
        return <DollarSign size={14} className="text-amber-400" />;
      default:
        return null;
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    const symbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£';
    return `${symbol}${amount.toFixed(2)}`;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar - Navy BMD Freight Theme */}
      <nav className="bg-[#1e3a5f] border-b border-white/10 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/img/logo.webp" alt="BMD Freight" width={50} height={50} className="bg-white rounded-lg p-1" />
            <div>
              <h1 className="text-white font-bold text-lg">Payment Terminal</h1>
              <p className="text-slate-300 text-xs">Manage client payment links</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300 text-sm hidden sm:block">Admin</span>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6 grid lg:grid-cols-3 gap-6">
        {/* Create Link Form */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-24">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
                <Plus size={20} className="text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Create New Link</h2>
                <p className="text-slate-500 text-xs">Generate payment link</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Client Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    required
                    className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-[#1e3a5f] text-sm"
                    placeholder="e.g. John Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Client Email</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    value={formData.clientEmail}
                    onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                    required
                    className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-[#1e3a5f] text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Amount</label>
                  <div className="relative">
                    <DollarSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="number"
                      step="0.01"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      required
                      className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-[#1e3a5f] text-sm"
                      placeholder="100.00"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Currency</label>
                  <div className="relative">
                    <CreditCard size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <select
                      value={formData.currency}
                      onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-[#1e3a5f] text-sm appearance-none"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Description (Optional)</label>
                <div className="relative">
                  <FileText size={16} className="absolute left-3 top-3 text-slate-400" />
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={2}
                    className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-[#1e3a5f] text-sm resize-none"
                    placeholder="Payment for car shipping..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#1e3a5f] hover:bg-[#152a45] disabled:bg-slate-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {loading ? 'Generating...' : <><Plus size={18} /> Generate Payment Link</>}
              </button>
            </form>
          </div>
        </div>

        {/* Links Table */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Payment Links</h2>
                <p className="text-slate-500 text-sm">{links.length} total links</p>
              </div>
              <button
                onClick={fetchLinks}
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors text-sm"
              >
                <RefreshCw size={16} /> Refresh
              </button>
            </div>

            {links.length === 0 ? (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign size={24} className="text-slate-400" />
                </div>
                <h3 className="text-slate-900 font-medium mb-2">No payment links yet</h3>
                <p className="text-slate-500 text-sm">Create your first payment link using the form</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Client</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Amount</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Date</th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {links.map((link) => (
                      <tr key={link.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center">
                              <User size={16} className="text-[#1e3a5f]" />
                            </div>
                            <div>
                              <div className="font-medium text-slate-900 text-sm">{link.clientName}</div>
                              <div className="text-slate-500 text-xs">{link.clientEmail}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-semibold text-slate-900">{formatCurrency(link.amount, link.currency)}</div>
                          <div className="text-slate-500 text-xs">{link.currency}</div>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(link.status)}`}>
                            {getStatusIcon(link.status)}
                            {link.status === 'paid' ? 'PAID' : link.status === 'pending' ? 'PENDING' : link.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-slate-600 text-sm">
                          {new Date(link.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => { setSelectedLink(link); setShowDetailModal(true); }}
                              className="p-2 text-slate-400 hover:text-[#1e3a5f] hover:bg-[#1e3a5f]/10 rounded-lg transition-colors"
                              title="View Details"
                            >
                              <ExternalLink size={16} />
                            </button>
                            <button
                              onClick={() => copyToClipboard(`${window.location.origin}/terminal/pay/${link.uniqueId}`)}
                              className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                              title="Copy Link"
                            >
                              <Copy size={16} />
                            </button>
                            <button
                              onClick={() => handleDelete(link.id)}
                              disabled={deleteLoading === link.id}
                              className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                              title="Delete Link"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Create Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Link Generated!</h3>
              <p className="text-slate-500 mt-2">Share this link with your client</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 mb-6">
              <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Payment URL</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={generatedUrl}
                  readOnly
                  className="flex-1 px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm font-mono"
                />
                <button
                  onClick={() => copyToClipboard(generatedUrl)}
                  className="px-4 py-2.5 bg-[#1e3a5f] hover:bg-[#152a45] text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Link Detail Modal */}
      {showDetailModal && selectedLink && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Payment Link Details</h3>
              <button
                onClick={() => setShowDetailModal(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              {/* Status Banner */}
              <div className={`p-4 rounded-xl border ${selectedLink.status === 'paid' ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${selectedLink.status === 'paid' ? 'bg-emerald-100' : 'bg-amber-100'}`}>
                    {selectedLink.status === 'paid' ? <Check size={24} className="text-emerald-600" /> : <DollarSign size={24} className="text-amber-600" />}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-600">Status</div>
                    <div className={`text-lg font-bold ${selectedLink.status === 'paid' ? 'text-emerald-700' : 'text-amber-700'}`}>
                      {selectedLink.status === 'paid' ? 'Payment Completed' : 'Payment Pending'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Amount */}
              <div className="text-center py-4 bg-slate-50 rounded-xl">
                <div className="text-sm text-slate-500 mb-1">Amount</div>
                <div className="text-3xl font-bold text-[#1e3a5f]">
                  {formatCurrency(selectedLink.amount, selectedLink.currency)}
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-3 rounded-lg">
                  <div className="text-xs text-slate-500 uppercase">Client Name</div>
                  <div className="font-medium text-slate-900">{selectedLink.clientName}</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <div className="text-xs text-slate-500 uppercase">Client Email</div>
                  <div className="font-medium text-slate-900 text-sm">{selectedLink.clientEmail}</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <div className="text-xs text-slate-500 uppercase">Created</div>
                  <div className="font-medium text-slate-900">{new Date(selectedLink.createdAt).toLocaleDateString()}</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <div className="text-xs text-slate-500 uppercase">Link ID</div>
                  <div className="font-medium text-slate-900 text-sm font-mono">{selectedLink.uniqueId.slice(0, 8)}...</div>
                </div>
              </div>

              {selectedLink.description && (
                <div className="bg-slate-50 p-3 rounded-lg">
                  <div className="text-xs text-slate-500 uppercase mb-1">Description</div>
                  <div className="text-slate-900 text-sm">{selectedLink.description}</div>
                </div>
              )}

              {selectedLink.stripeId && (
                <div className="bg-slate-50 p-3 rounded-lg">
                  <div className="text-xs text-slate-500 uppercase">Stripe ID</div>
                  <div className="font-mono text-slate-900 text-sm">{selectedLink.stripeId}</div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Link
                  href={`/terminal/pay/${selectedLink.uniqueId}`}
                  target="_blank"
                  className="flex-1 py-2.5 bg-[#1e3a5f] hover:bg-[#152a45] text-white text-center font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} /> Open Link
                </Link>
                <button
                  onClick={() => copyToClipboard(`${window.location.origin}/terminal/pay/${selectedLink.uniqueId}`)}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Copy size={16} /> Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
