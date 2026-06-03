import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const envStatus = {
    hasDatabaseUrl: Boolean(
      process.env.POSTGRES_PRISMA_URL || process.env.DATABASE_URL
    ),
    hasDirectUrl: Boolean(
      process.env.POSTGRES_URL_NON_POOLING || process.env.DIRECT_URL
    ),
    hasJwtSecret: Boolean(
      process.env.JWT_SECRET || process.env.SUPABASE_JWT_SECRET
    ),
  };

  try {
    const adminCount = await prisma.admin.count();

    return NextResponse.json({
      status: 'ok',
      database: 'connected',
      adminCount,
      env: envStatus,
    });
  } catch (error) {
    console.error('Health check error:', error);

    const errorMessage =
      error instanceof Error ? error.message : 'Unknown database error';

    return NextResponse.json(
      {
        status: 'error',
        database: 'failed',
        env: envStatus,
        error: errorMessage,
        hint:
          errorMessage.includes('does not exist') || errorMessage.includes('admins')
            ? 'Run prisma/setup-production.sql in Supabase SQL Editor'
            : 'Check POSTGRES_PRISMA_URL and POSTGRES_URL_NON_POOLING in Vercel env vars',
      },
      { status: 500 }
    );
  }
}
