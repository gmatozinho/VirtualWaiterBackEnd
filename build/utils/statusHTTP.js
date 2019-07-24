"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var informativeResponse = {
    Continue: 100,
    SwitchingProtocol: 101,
    Procecessing: 102,
};
var sucessResponse = {
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
};
var redirectMessage = {
    MultipleChoices: 300,
};
var clientErrorResponse = {
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
};
var serverErrorResponse = {
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
};
exports.statusHTTPCode = {
    informativeResponse: informativeResponse,
    sucessResponse: sucessResponse,
    redirectMessage: redirectMessage,
    clientErrorResponse: clientErrorResponse,
    serverErrorResponse: serverErrorResponse,
};
//# sourceMappingURL=statusHTTP.js.map