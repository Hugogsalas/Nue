import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import path from "path";
import {loadFilesSync} from '@graphql-tools/load-files';
const resolverArray = loadFilesSync(path.join(__dirname, '/**/resolver.ts'))
export const resolver = mergeResolvers(resolverArray)

const typesArray = loadFilesSync(path.join(__dirname, '/**/*.graphql'))
export const types = mergeTypeDefs(typesArray)
