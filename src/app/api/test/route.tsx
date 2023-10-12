import { NextResponse, NextRequest } from "next/server";
import { getTest, postTest } from "@/modules/test/test.service";
import { catchAsync } from "@/utils/catchAsync";

export async function GET() {
  return await catchAsync(async () => {
    const res = await getTest();
    return NextResponse.json(
      {
        message: "success",
        data: res,
      },
      { status: 200 }
    );
  });
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  const { name, age } = req;
  return await catchAsync(async () => {
    const res = await postTest(name, age);
    return NextResponse.json(
      {
        message: "success",
        data: res,
      },
      { status: 200 }
    );
  });
}
