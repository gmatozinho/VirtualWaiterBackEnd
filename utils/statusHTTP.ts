const informativeResponse = {
    Continue: 100,
    SwitchingProtocol: 101,
    Procecessing: 102,
};

const sucessResponse = {
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
};

const redirectMessage = {
    MultipleChoices: 300,
};

const clientErrorResponse = {
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
};

const serverErrorResponse = {
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
};

export let statusHTTPCode = {
    informativeResponse,
    sucessResponse,
    redirectMessage,
    clientErrorResponse,
    serverErrorResponse,
};
