import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

//data to be imported
import users from './data/users.js';
import products from './data/products.js';

//models imported
import User from './models/userModel.js';
import Product from './models/productModel.js';

//connect to db
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // await Order.deleteMany(); // wipes out db, dont want to import anything with stuff in the db
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }; // adding all the products and 1 admin user
    });

    await Product.insertMany(sampleProducts);

    console.log('Data Imported!'.green.inverse);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    //  await Order.deleteMany(); // wipes out db, dont want to import anything with stuff in the db
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] == '-d') {
  destroyData(); // if -d in script destroy data
} else {
  importData();
}
