// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var ssigmaapi_flnd_v1_flnd_pb = require('../../../ssigmaapi/flnd/v1/flnd_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssigmaapi_flnd_v1_VitessMessage(arg) {
  if (!(arg instanceof ssigmaapi_flnd_v1_flnd_pb.VitessMessage)) {
    throw new Error('Expected argument of type ssigmaapi.flnd.v1.VitessMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ssigmaapi_flnd_v1_VitessMessage(buffer_arg) {
  return ssigmaapi_flnd_v1_flnd_pb.VitessMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var VitessServiceV1Service = exports.VitessServiceV1Service = {
  getMessage: {
    path: '/ssigmaapi.flnd.v1.VitessServiceV1/GetMessage',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: ssigmaapi_flnd_v1_flnd_pb.VitessMessage,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ssigmaapi_flnd_v1_VitessMessage,
    responseDeserialize: deserialize_ssigmaapi_flnd_v1_VitessMessage,
  },
  createMessage: {
    path: '/ssigmaapi.flnd.v1.VitessServiceV1/CreateMessage',
    requestStream: false,
    responseStream: false,
    requestType: ssigmaapi_flnd_v1_flnd_pb.VitessMessage,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ssigmaapi_flnd_v1_VitessMessage,
    requestDeserialize: deserialize_ssigmaapi_flnd_v1_VitessMessage,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  updateMessage: {
    path: '/ssigmaapi.flnd.v1.VitessServiceV1/UpdateMessage',
    requestStream: false,
    responseStream: false,
    requestType: ssigmaapi_flnd_v1_flnd_pb.VitessMessage,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ssigmaapi_flnd_v1_VitessMessage,
    requestDeserialize: deserialize_ssigmaapi_flnd_v1_VitessMessage,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteMessage: {
    path: '/ssigmaapi.flnd.v1.VitessServiceV1/DeleteMessage',
    requestStream: false,
    responseStream: false,
    requestType: ssigmaapi_flnd_v1_flnd_pb.VitessMessage,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ssigmaapi_flnd_v1_VitessMessage,
    requestDeserialize: deserialize_ssigmaapi_flnd_v1_VitessMessage,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.VitessServiceV1Client = grpc.makeGenericClientConstructor(VitessServiceV1Service);
