import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const snackTag = await prisma.tag.upsert({ where: { name: 'Snack' }, update: {}, create: { name: 'Snack' } });
  const organicTag = await prisma.tag.upsert({ where: { name: 'Organic' }, update: {}, create: { name: 'Organic' } });

  await prisma.product.create({
    data: {
      title: "Seeds of Change Organic Quinoa, Brown",
      description: "Lorem ipsum dolor sit amet...",
      price: 38.00,
      oldPrice: 52.00,
      category: "Snack",
      brand: "NestFood",
      image: "/assets/images/product-main.jpg",
      rating: 4.0,
      reviewCount: 32,
      badgeText: "Sale",
      badgeColor: "blue",
      flavour: "Plain",
      dietType: "Vegetarian",
      weight: "500g",
      tags: { connect: [{ id: snackTag.id }, { id: organicTag.id }] }
    }
  });
  
  console.log('Database seeded!');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });