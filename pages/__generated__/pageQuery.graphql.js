/**
 * @flow
 * @relayHash 7aba7ded85ce75b04c96995918748bc0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ItemStatus = "draft" | "published" | "updated" | "%future added value";
export type PageModelFilter = {
  OR?: ?$ReadOnlyArray<?PageModelFilter>,
  id?: ?IdFilter,
  updatedAt?: ?DateTimeFilter,
  createdAt?: ?DateTimeFilter,
  position?: ?PositionFilter,
  status?: ?StatusFilter,
  text?: ?TextFilter,
  url?: ?SlugFilter,
  title?: ?StringFilter,
};
export type IdFilter = {
  eq?: ?any,
  neq?: ?any,
  in?: ?$ReadOnlyArray<?any>,
};
export type DateTimeFilter = {
  gt?: ?any,
  lt?: ?any,
  gte?: ?any,
  lte?: ?any,
  exists?: ?any,
  eq?: ?any,
  neq?: ?any,
};
export type PositionFilter = {
  gt?: ?any,
  lt?: ?any,
  gte?: ?any,
  lte?: ?any,
  eq?: ?any,
  neq?: ?any,
};
export type StatusFilter = {
  eq?: ?ItemStatus,
  neq?: ?ItemStatus,
  in?: ?$ReadOnlyArray<?ItemStatus>,
};
export type TextFilter = {
  matches?: ?TextMatchesFilter,
  notMatches?: ?TextMatchesFilter,
  exists?: ?any,
};
export type TextMatchesFilter = {
  pattern: string,
  caseSensitive?: ?any,
};
export type SlugFilter = {
  eq?: ?string,
  neq?: ?string,
  in?: ?$ReadOnlyArray<?string>,
};
export type StringFilter = {
  matches?: ?StringMatchesFilter,
  notMatches?: ?StringMatchesFilter,
  exists?: ?any,
  eq?: ?string,
  neq?: ?string,
  in?: ?$ReadOnlyArray<?string>,
};
export type StringMatchesFilter = {
  pattern: string,
  caseSensitive?: ?any,
};
export type pageQueryVariables = {|
  urlFilter: PageModelFilter
|};
export type pageQueryResponse = {|
  +page: ?{|
    +title: ?string,
    +text: ?string,
  |}
|};
export type pageQuery = {|
  variables: pageQueryVariables,
  response: pageQueryResponse,
|};
*/


/*
query pageQuery(
  $urlFilter: PageModelFilter!
) {
  page(filter: $urlFilter) {
    title
    text
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "urlFilter",
    "type": "PageModelFilter!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "urlFilter",
    "type": "PageModelFilter"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "text",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "pageQuery",
  "id": null,
  "text": "query pageQuery(\n  $urlFilter: PageModelFilter!\n) {\n  page(filter: $urlFilter) {\n    title\n    text\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "pageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "page",
        "storageKey": null,
        "args": v1,
        "concreteType": "PageRecord",
        "plural": false,
        "selections": [
          v2,
          v3
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "pageQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "page",
        "storageKey": null,
        "args": v1,
        "concreteType": "PageRecord",
        "plural": false,
        "selections": [
          v2,
          v3,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '974a1a260631a8d48edcf53243081c5e';
module.exports = node;
