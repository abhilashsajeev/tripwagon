import { NextResponse } from 'next/server';

export const POST = async (request: any) => {
  try {
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};

export const GET = async (request: any) => {};
