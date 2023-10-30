// seeds.ts

const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();
function generateUniqueID() {
  return Math.floor(Math.random() * 1000000); // You can adjust the range as needed
}
async function main() {
  // Create sample customers


  const customer1 = await prisma.customer.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      address: '123 Main Street',
      postcode: '12345',
      phoneNumber: '1234567890',
      id: generateUniqueID(),
    },
  });

  const customer2 = await prisma.customer.create({
    data: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      address: '456 Elm Street',
      postcode: '54321',
      phoneNumber: '1234567890',
      id: generateUniqueID(),

    },
  });

  const customer3 = await prisma.customer.create({
    data: {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      address: '789 Oak Avenue',
      postcode: '98765',
      phoneNumber: '1234567890',
      id: generateUniqueID(),
    },
  });

  // Create sample orders
  const order1 = await prisma.order.create({
    data: {
      orderNumber: 'ORD-001',
      totalAmount: 100.00,
      orderStatus: 'ordered',
      customerId: customer1.id,
      id: generateUniqueID(), // Explicitly set id to null to satisfy the type requirements
      ProductName: 'Apple',

    },
  });

  const order2 = await prisma.order.create({
    data: {
      orderNumber: 'ORD-002',
      ProductName: 'Orange',
      totalAmount: 150.00,
      orderStatus: 'shipped',
      customerId: customer1.id,
      id: generateUniqueID(), // Explicitly set id to null to satisfy the type requirements
    },
  });

  const order3 = await prisma.order.create({
    data: {
      orderNumber: 'ORD-003',
      ProductName: 'Banana',
      totalAmount: 75.00,
      orderStatus: 'delivered',
      customerId: customer2.id,
      id: generateUniqueID(), // Explicitly set id to null to satisfy the type requirements
    },
  });

  console.log('Sample data created successfully');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
