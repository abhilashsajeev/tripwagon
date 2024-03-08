import { getVehicleById } from '@/actions/rates';
import { NextResponse } from 'next/server';

export const POST = async (request: any) => {
  try {
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const result = await getVehicleById(id!);
  return Response.json(result);
};
