import prisma from '@/app/libs/prismadb';

export interface IListingsParams {
  userId?: string;
}

export default async function getListings(params: IListingsParams) {
  try {
    const userId = params;

    let query = {};

    if (!userId) {
      query.userId = userId;
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc'
      }
    });

    const safeListing = listings.map((listing) => ({
      ...listing,
      createAt: listing.createdAt.toISOString()
    }));

    return safeListing;
  } catch (error: any) {
    throw new Error(error);
  }
}
