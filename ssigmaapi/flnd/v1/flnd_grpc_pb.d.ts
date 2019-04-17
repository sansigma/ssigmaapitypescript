// package: ssigmaapi.flnd.v1
// file: ssigmaapi/flnd/v1/flnd.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as ssigmaapi_flnd_v1_flnd_pb from "../../../ssigmaapi/flnd/v1/flnd_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IVitessServiceV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getMessage: IVitessServiceV1Service_IGetMessage;
    createMessage: IVitessServiceV1Service_ICreateMessage;
    updateMessage: IVitessServiceV1Service_IUpdateMessage;
    deleteMessage: IVitessServiceV1Service_IDeleteMessage;
}

interface IVitessServiceV1Service_IGetMessage extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, ssigmaapi_flnd_v1_flnd_pb.VitessMessage> {
    path: string; // "/ssigmaapi.flnd.v1.VitessServiceV1/GetMessage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<ssigmaapi_flnd_v1_flnd_pb.VitessMessage>;
    responseDeserialize: grpc.deserialize<ssigmaapi_flnd_v1_flnd_pb.VitessMessage>;
}
interface IVitessServiceV1Service_ICreateMessage extends grpc.MethodDefinition<ssigmaapi_flnd_v1_flnd_pb.VitessMessage, google_protobuf_empty_pb.Empty> {
    path: string; // "/ssigmaapi.flnd.v1.VitessServiceV1/CreateMessage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<ssigmaapi_flnd_v1_flnd_pb.VitessMessage>;
    requestDeserialize: grpc.deserialize<ssigmaapi_flnd_v1_flnd_pb.VitessMessage>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IVitessServiceV1Service_IUpdateMessage extends grpc.MethodDefinition<ssigmaapi_flnd_v1_flnd_pb.VitessMessage, google_protobuf_empty_pb.Empty> {
    path: string; // "/ssigmaapi.flnd.v1.VitessServiceV1/UpdateMessage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<ssigmaapi_flnd_v1_flnd_pb.VitessMessage>;
    requestDeserialize: grpc.deserialize<ssigmaapi_flnd_v1_flnd_pb.VitessMessage>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IVitessServiceV1Service_IDeleteMessage extends grpc.MethodDefinition<ssigmaapi_flnd_v1_flnd_pb.VitessMessage, google_protobuf_empty_pb.Empty> {
    path: string; // "/ssigmaapi.flnd.v1.VitessServiceV1/DeleteMessage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<ssigmaapi_flnd_v1_flnd_pb.VitessMessage>;
    requestDeserialize: grpc.deserialize<ssigmaapi_flnd_v1_flnd_pb.VitessMessage>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const VitessServiceV1Service: IVitessServiceV1Service;

export interface IVitessServiceV1Server {
    getMessage: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, ssigmaapi_flnd_v1_flnd_pb.VitessMessage>;
    createMessage: grpc.handleUnaryCall<ssigmaapi_flnd_v1_flnd_pb.VitessMessage, google_protobuf_empty_pb.Empty>;
    updateMessage: grpc.handleUnaryCall<ssigmaapi_flnd_v1_flnd_pb.VitessMessage, google_protobuf_empty_pb.Empty>;
    deleteMessage: grpc.handleUnaryCall<ssigmaapi_flnd_v1_flnd_pb.VitessMessage, google_protobuf_empty_pb.Empty>;
}

export interface IVitessServiceV1Client {
    getMessage(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: ssigmaapi_flnd_v1_flnd_pb.VitessMessage) => void): grpc.ClientUnaryCall;
    getMessage(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssigmaapi_flnd_v1_flnd_pb.VitessMessage) => void): grpc.ClientUnaryCall;
    getMessage(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssigmaapi_flnd_v1_flnd_pb.VitessMessage) => void): grpc.ClientUnaryCall;
    createMessage(request: ssigmaapi_flnd_v1_flnd_pb.VitessMessage, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createMessage(request: ssigmaapi_flnd_v1_flnd_pb.VitessMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createMessage(request: ssigmaapi_flnd_v1_flnd_pb.VitessMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateMessage(request: ssigmaapi_flnd_v1_flnd_pb.VitessMessage, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateMessage(request: ssigmaapi_flnd_v1_flnd_pb.VitessMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateMessage(request: ssigmaapi_flnd_v1_flnd_pb.VitessMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteMessage(request: ssigmaapi_flnd_v1_flnd_pb.VitessMessage, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteMessage(request: ssigmaapi_flnd_v1_flnd_pb.VitessMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteMessage(request: ssigmaapi_flnd_v1_flnd_pb.VitessMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class VitessServiceV1Client extends grpc.Client implements IVitessServiceV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getMessage(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: ssigmaapi_flnd_v1_flnd_pb.VitessMessage) => void): grpc.ClientUnaryCall;
    public getMessage(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ssigmaapi_flnd_v1_flnd_pb.VitessMessage) => void): grpc.ClientUnaryCall;
    public getMessage(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ssigmaapi_flnd_v1_flnd_pb.VitessMessage) => void): grpc.ClientUnaryCall;
    public createMessage(request: ssigmaapi_flnd_v1_flnd_pb.VitessMessage, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createMessage(request: ssigmaapi_flnd_v1_flnd_pb.VitessMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createMessage(request: ssigmaapi_flnd_v1_flnd_pb.VitessMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateMessage(request: ssigmaapi_flnd_v1_flnd_pb.VitessMessage, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateMessage(request: ssigmaapi_flnd_v1_flnd_pb.VitessMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateMessage(request: ssigmaapi_flnd_v1_flnd_pb.VitessMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteMessage(request: ssigmaapi_flnd_v1_flnd_pb.VitessMessage, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteMessage(request: ssigmaapi_flnd_v1_flnd_pb.VitessMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteMessage(request: ssigmaapi_flnd_v1_flnd_pb.VitessMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
