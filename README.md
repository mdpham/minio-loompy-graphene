# minio-loompy-graphene
Minimum viable graphql endpoint for CReSCENT pipeline result post processing running on FastAPI

`cp sample.env .env`

`docker build -t minio-loompy-graphene`

`docker-compose up`

Go to `localhost:9000` for minio and `localhost:8000` for graphql playground.

Strongly suggested to use GraphQL Voyager to explore API.
`Result` type has a `runId` String field and a `bucket` field of type `MinioBucket`.
`MinioBucket` type has a `bucketName` String field and a `objects` field of type `[MinioObject]`.
`MinioObject` type has the typical minio properties as well as a field for presignedURLs.
`LoomFile` type has the basic column/row attributes and shape fields.

