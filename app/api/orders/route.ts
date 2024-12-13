// app/api/orders/route.ts
import { createAdminClient } from '@/appwrite/config';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { databases } = await createAdminClient();

    // Fetch the list of documents from the Appwrite database
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_COLLECTION_ORDERS!,
    )

    // Extract the orders and total from the response
    const { documents: orders, total } = response;

    // Return the orders and total in JSON format
    return NextResponse.json({ orders, total });
  } catch (error: any) {

    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
