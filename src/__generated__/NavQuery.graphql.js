/**
 * @flow
 * @relayHash e16d14e95a27817c6258b39bdad73c40
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NavQueryVariables = {||};
export type NavQueryResponse = {|
  +allPages: ?$ReadOnlyArray<?{|
    +url: ?string,
    +title: ?string,
  |}>
|};
export type NavQuery = {|
  variables: NavQueryVariables,
  response: NavQueryResponse,
|};
*/


/*
query NavQuery {
  allPages {
    url
    title
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "NavQuery",
  "id": null,
  "text": "query NavQuery {\n  allPages {\n    url\n    title\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NavQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allPages",
        "storageKey": null,
        "args": null,
        "concreteType": "PageRecord",
        "plural": true,
        "selections": [
          v0,
          v1
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NavQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allPages",
        "storageKey": null,
        "args": null,
        "concreteType": "PageRecord",
        "plural": true,
        "selections": [
          v0,
          v1,
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
(node/*: any*/).hash = 'e712befa5865d2d9719eb3b123663e8b';
module.exports = node;
