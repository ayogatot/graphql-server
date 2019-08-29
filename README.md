# Graphql Server

You can clone this project and install the requirement dependencies using npm :

```sh
npm install
```

or using yarn :

```sh
yarn
```

# Simple Explanation

- You need to defining type :

```sh
type Books {
   id: ID!
   title: String!
   author: String!
   createdAt: String!
   updatedAt: String!
  }
type Query {
    getBook: [Books]
  }
```

- And then make a resolvers :

```sh
Query: {
    getBook: async () => {
      try {
        const books = await Book.find();
        return books;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
```

- Finnaly you can call the Apollo Server :

```sh
server
.listen({ port: PORT })
.then(res => {
    console.log(`server running at PORT => ${PORT}`);
  });
```

Screenshot Apollo Graphql:

![Apollo Graphql](https://res.cloudinary.com/gatotman/image/upload/v1567073339/Github%20Image/graphql_lt3moy.png)

Apollo Graphql will automatically self documentating, you can see on the right tab.

# Reference :

1. [Graphql Documentation](https://graphql.org)
2. [Deploy MongoDB](https://cloud.mongodb.com/)
3. [Apollo Graphql](https://www.apollographql.com/)
4. [Youtube - Graphql Server](https://www.youtube.com/watch?v=YPKH6OhEHFI&list=PLMhAeHCz8S3_CTiWMQhL6YxX7vZ7z84Zo&index=3)
