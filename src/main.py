# Create graphql schema and serve as single endpoint on fastapi server
from fastapi import FastAPI
from starlette.graphql import GraphQLApp
from graphene import Schema
from query import Query
from mutation import Mutation

app = FastAPI()
app.add_route("/", GraphQLApp(schema=Schema(query=Query, mutation=Mutation)))