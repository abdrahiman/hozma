# 🌿 LaapLand - Ecommerce Store Nest and MongoDB

Welcome to LaapLand, your go-to store for laptops and related products. Below are the API routes to interact with our system.

## Authentication

- [POST] `/auth/signup`: Create a new user account
- [POST] `/auth/login`: Log in a user
- [GET] `/auth/me`: Get information about the current user
- [PUT] `/auth/me`: Update information of the current user
- [DELETE] `/auth/me`: Delete the current user account

## Products

- [GET] `/products`: Get a list of products
- [GET] `/products/:id`: Find a product by its ID
- [POST] `/products` [ADMIN]: Create a new product
- [PUT] `/products/:id` [ADMIN]: Update product information
- [DELETE] `/products/:id` [ADMIN]: Delete a product

## Categories

- [GET] `/categories`: Get a list of categories
- [GET] `/categories/:id`: Find a category by its ID along with its products
- [POST] `/categories` [ADMIN]: Create a new category
- [PUT] `/categories/:id` [ADMIN]: Update category information
- [DELETE] `/categories/:id` [ADMIN]: Delete a category

## Brands

- [GET] `/brands`: Get a list of brands
- [GET] `/brands/:id`: Find a brand by its ID
- [POST] `/brands` [ADMIN]: Create a new brand
- [PUT] `/brands/:id` [ADMIN]: Update brand information
- [DELETE] `/brands/:id` [ADMIN]: Delete a brand

## Users

- [GET] `/users`: Get a list of users
- [GET] `/users/:id`: Get information about a specific user
- [POST] `/users` [ADMIN]: Create a new user
- [PUT] `/users/:id` [ADMIN]: Update user information
- [DELETE] `/users/:id` [ADMIN]: Delete a user

## Customers

- [GET] `/customers`: Get a list of customers
- [GET] `/customers/:id`: Get information about a specific customer
- [GET] `/customers/me`: Get information about the current customer
- [POST] `/customers` [ADMIN]: Create a new customer
- [PUT] `/customers/:id` [ADMIN]: Update customer information
- [DELETE] `/customers/:id` [ADMIN]: Delete a customer

## Orders

- [GET] `/orders` [ADMIN]: Get a list of all orders
- [GET] `/orders/me`: Get all orders of the current customer
- [GET] `/orders/:id`: Get information about a specific order
- [POST] `/orders` [CUSTOMER]: Create a new order
- [PUT] `/orders/:id`: Update order information
- [DELETE] `/orders/:id`: Delete an order
