# minio-loompy-graphene
Minimum viable graphql endpoint for CReSCENT pipeline result post processing running on FastAPI

`cp sample.env .env`

`docker build -t minio-loompy-graphene src`

`docker build -t mlg-voyager voyager`

`docker-compose up`

Go to `localhost:9000` for minio and `localhost:8000` for graphql playground and `localhost:3000` for graphql voyager.

`Result` type has a `runId` String field and a `bucket` field of type `MinioBucket`.
`MinioBucket` type has a `bucketName` String field and a `objects` field of type `[MinioObject]`.
`MinioObject` type has the typical minio properties as well as a field for presignedURLs.
`LoomFile` type has the basic column/row attributes and shape fields.


TODO:
  - LoomFile type definition should implement a MinioObject interface (how to most generally represent MinioObject?)
  - env and proxies for voyager so fastapi doesn't need to serve second endpoint ('/graphql')
