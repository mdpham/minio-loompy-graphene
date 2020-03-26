# minio-loompy-graphene
Minimum viable graphql endpoint for CReSCENT pipeline result post processing running on FastAPI

Assumes that you are running a minio server with volume mounted to `/minio` using:

`docker run -p 9000:9000 -v /path_to_repo_dir/minio:/data minio/minio server /data`.

Run the graphene server using:

`cd src`

`uvicorn main:app --reload`

Go to `localhost:9000` for minio and `localhost:8000` for graphql playground.

Strongly suggested to use GraphQL Voyager to explore API.
`Result` type has a `runId` String field and a `bucket` field of type `MinioBucket`.
`MinioBucket` type has a `bucketName` String field and a `objects` field of type `[MinioObject]`.
`MinioObject` type has the typical minio properties as well as a field for presignedURLs.
`LoomFile` type has the basic column/row attributes and shape fields.

