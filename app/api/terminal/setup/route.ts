import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword } from '@/lib/auth';

export async function POST() {
  try {
    const adminCount = await prisma.admin.count();

    if (adminCount > 0) {
      return NextResponse.json(
        { error: 'Setup already completed' },
        { status: 403 }
      );
    }

    await prisma.admin.create({
      data: {
        username: 'admin',
        password: await hashPassword('admin123'),
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Admin user created. Username: admin, Password: admin123',
    });
  } catch (error) {
    console.error('Setup error:', error);
    return NextResponse.json(
      { error: 'Setup failed. Check database connection and env vars.' },
      { status: 500 }
    );
  }
}
