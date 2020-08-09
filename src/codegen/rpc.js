/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.rpc = (function() {

    /**
     * Namespace rpc.
     * @exports rpc
     * @namespace
     */
    var rpc = {};

    rpc.SubscriptionPlanService = (function() {

        /**
         * Constructs a new SubscriptionPlanService service.
         * @memberof rpc
         * @classdesc Represents a SubscriptionPlanService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function SubscriptionPlanService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (SubscriptionPlanService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = SubscriptionPlanService;

        /**
         * Creates new SubscriptionPlanService service using the specified rpc implementation.
         * @function create
         * @memberof rpc.SubscriptionPlanService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {SubscriptionPlanService} RPC service. Useful where requests and/or responses are streamed.
         */
        SubscriptionPlanService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link rpc.SubscriptionPlanService#findAll}.
         * @memberof rpc.SubscriptionPlanService
         * @typedef FindAllCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rpc.ListSubscriptionPlans} [response] ListSubscriptionPlans
         */

        /**
         * Calls FindAll.
         * @function findAll
         * @memberof rpc.SubscriptionPlanService
         * @instance
         * @param {rpc.IEmpty} request Empty message or plain object
         * @param {rpc.SubscriptionPlanService.FindAllCallback} callback Node-style callback called with the error, if any, and ListSubscriptionPlans
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(SubscriptionPlanService.prototype.findAll = function findAll(request, callback) {
            return this.rpcCall(findAll, $root.rpc.Empty, $root.rpc.ListSubscriptionPlans, request, callback);
        }, "name", { value: "FindAll" });

        /**
         * Calls FindAll.
         * @function findAll
         * @memberof rpc.SubscriptionPlanService
         * @instance
         * @param {rpc.IEmpty} request Empty message or plain object
         * @returns {Promise<rpc.ListSubscriptionPlans>} Promise
         * @variation 2
         */

        return SubscriptionPlanService;
    })();

    rpc.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof rpc
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof rpc
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {rpc.IEmpty=} [properties] Properties to set
         */
        function Empty(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Empty instance using the specified properties.
         * @function create
         * @memberof rpc.Empty
         * @static
         * @param {rpc.IEmpty=} [properties] Properties to set
         * @returns {rpc.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link rpc.Empty.verify|verify} messages.
         * @function encode
         * @memberof rpc.Empty
         * @static
         * @param {rpc.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link rpc.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.Empty
         * @static
         * @param {rpc.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.Empty();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Empty message.
         * @function verify
         * @memberof rpc.Empty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.Empty)
                return object;
            return new $root.rpc.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.Empty
         * @static
         * @param {rpc.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof rpc.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Empty;
    })();

    rpc.ListSubscriptionPlans = (function() {

        /**
         * Properties of a ListSubscriptionPlans.
         * @memberof rpc
         * @interface IListSubscriptionPlans
         * @property {Array.<subscription_plan.ISubscriptionPlan>|null} [subscription_plans] ListSubscriptionPlans subscription_plans
         */

        /**
         * Constructs a new ListSubscriptionPlans.
         * @memberof rpc
         * @classdesc Represents a ListSubscriptionPlans.
         * @implements IListSubscriptionPlans
         * @constructor
         * @param {rpc.IListSubscriptionPlans=} [properties] Properties to set
         */
        function ListSubscriptionPlans(properties) {
            this.subscription_plans = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListSubscriptionPlans subscription_plans.
         * @member {Array.<subscription_plan.ISubscriptionPlan>} subscription_plans
         * @memberof rpc.ListSubscriptionPlans
         * @instance
         */
        ListSubscriptionPlans.prototype.subscription_plans = $util.emptyArray;

        /**
         * Creates a new ListSubscriptionPlans instance using the specified properties.
         * @function create
         * @memberof rpc.ListSubscriptionPlans
         * @static
         * @param {rpc.IListSubscriptionPlans=} [properties] Properties to set
         * @returns {rpc.ListSubscriptionPlans} ListSubscriptionPlans instance
         */
        ListSubscriptionPlans.create = function create(properties) {
            return new ListSubscriptionPlans(properties);
        };

        /**
         * Encodes the specified ListSubscriptionPlans message. Does not implicitly {@link rpc.ListSubscriptionPlans.verify|verify} messages.
         * @function encode
         * @memberof rpc.ListSubscriptionPlans
         * @static
         * @param {rpc.IListSubscriptionPlans} message ListSubscriptionPlans message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListSubscriptionPlans.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subscription_plans != null && message.subscription_plans.length)
                for (var i = 0; i < message.subscription_plans.length; ++i)
                    $root.subscription_plan.SubscriptionPlan.encode(message.subscription_plans[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListSubscriptionPlans message, length delimited. Does not implicitly {@link rpc.ListSubscriptionPlans.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.ListSubscriptionPlans
         * @static
         * @param {rpc.IListSubscriptionPlans} message ListSubscriptionPlans message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListSubscriptionPlans.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListSubscriptionPlans message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.ListSubscriptionPlans
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.ListSubscriptionPlans} ListSubscriptionPlans
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListSubscriptionPlans.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.ListSubscriptionPlans();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.subscription_plans && message.subscription_plans.length))
                        message.subscription_plans = [];
                    message.subscription_plans.push($root.subscription_plan.SubscriptionPlan.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListSubscriptionPlans message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.ListSubscriptionPlans
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.ListSubscriptionPlans} ListSubscriptionPlans
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListSubscriptionPlans.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListSubscriptionPlans message.
         * @function verify
         * @memberof rpc.ListSubscriptionPlans
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListSubscriptionPlans.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subscription_plans != null && message.hasOwnProperty("subscription_plans")) {
                if (!Array.isArray(message.subscription_plans))
                    return "subscription_plans: array expected";
                for (var i = 0; i < message.subscription_plans.length; ++i) {
                    var error = $root.subscription_plan.SubscriptionPlan.verify(message.subscription_plans[i]);
                    if (error)
                        return "subscription_plans." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListSubscriptionPlans message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.ListSubscriptionPlans
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.ListSubscriptionPlans} ListSubscriptionPlans
         */
        ListSubscriptionPlans.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.ListSubscriptionPlans)
                return object;
            var message = new $root.rpc.ListSubscriptionPlans();
            if (object.subscription_plans) {
                if (!Array.isArray(object.subscription_plans))
                    throw TypeError(".rpc.ListSubscriptionPlans.subscription_plans: array expected");
                message.subscription_plans = [];
                for (var i = 0; i < object.subscription_plans.length; ++i) {
                    if (typeof object.subscription_plans[i] !== "object")
                        throw TypeError(".rpc.ListSubscriptionPlans.subscription_plans: object expected");
                    message.subscription_plans[i] = $root.subscription_plan.SubscriptionPlan.fromObject(object.subscription_plans[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListSubscriptionPlans message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.ListSubscriptionPlans
         * @static
         * @param {rpc.ListSubscriptionPlans} message ListSubscriptionPlans
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListSubscriptionPlans.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.subscription_plans = [];
            if (message.subscription_plans && message.subscription_plans.length) {
                object.subscription_plans = [];
                for (var j = 0; j < message.subscription_plans.length; ++j)
                    object.subscription_plans[j] = $root.subscription_plan.SubscriptionPlan.toObject(message.subscription_plans[j], options);
            }
            return object;
        };

        /**
         * Converts this ListSubscriptionPlans to JSON.
         * @function toJSON
         * @memberof rpc.ListSubscriptionPlans
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListSubscriptionPlans.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListSubscriptionPlans;
    })();

    return rpc;
})();

$root.subscription_plan = (function() {

    /**
     * Namespace subscription_plan.
     * @exports subscription_plan
     * @namespace
     */
    var subscription_plan = {};

    subscription_plan.SubscriptionPlan = (function() {

        /**
         * Properties of a SubscriptionPlan.
         * @memberof subscription_plan
         * @interface ISubscriptionPlan
         * @property {number|null} [id] SubscriptionPlan id
         * @property {string|null} [name] SubscriptionPlan name
         * @property {string|null} [code] SubscriptionPlan code
         * @property {string|null} [slug] SubscriptionPlan slug
         * @property {string|null} [description] SubscriptionPlan description
         * @property {number|null} [price] SubscriptionPlan price
         * @property {number|null} [extra_fee] SubscriptionPlan extra_fee
         * @property {number|null} [invoice_period] SubscriptionPlan invoice_period
         * @property {subscription_plan.SubscriptionPlan.SubscriptionDuration|null} [invoice_duration] SubscriptionPlan invoice_duration
         * @property {number|null} [trail_period] SubscriptionPlan trail_period
         * @property {subscription_plan.SubscriptionPlan.SubscriptionDuration|null} [trail_duration] SubscriptionPlan trail_duration
         */

        /**
         * Constructs a new SubscriptionPlan.
         * @memberof subscription_plan
         * @classdesc Represents a SubscriptionPlan.
         * @implements ISubscriptionPlan
         * @constructor
         * @param {subscription_plan.ISubscriptionPlan=} [properties] Properties to set
         */
        function SubscriptionPlan(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubscriptionPlan id.
         * @member {number} id
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.id = 0;

        /**
         * SubscriptionPlan name.
         * @member {string} name
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.name = "";

        /**
         * SubscriptionPlan code.
         * @member {string} code
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.code = "";

        /**
         * SubscriptionPlan slug.
         * @member {string} slug
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.slug = "";

        /**
         * SubscriptionPlan description.
         * @member {string} description
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.description = "";

        /**
         * SubscriptionPlan price.
         * @member {number} price
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.price = 0;

        /**
         * SubscriptionPlan extra_fee.
         * @member {number} extra_fee
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.extra_fee = 0;

        /**
         * SubscriptionPlan invoice_period.
         * @member {number} invoice_period
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.invoice_period = 0;

        /**
         * SubscriptionPlan invoice_duration.
         * @member {subscription_plan.SubscriptionPlan.SubscriptionDuration} invoice_duration
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.invoice_duration = 0;

        /**
         * SubscriptionPlan trail_period.
         * @member {number} trail_period
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.trail_period = 0;

        /**
         * SubscriptionPlan trail_duration.
         * @member {subscription_plan.SubscriptionPlan.SubscriptionDuration} trail_duration
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.trail_duration = 0;

        /**
         * Creates a new SubscriptionPlan instance using the specified properties.
         * @function create
         * @memberof subscription_plan.SubscriptionPlan
         * @static
         * @param {subscription_plan.ISubscriptionPlan=} [properties] Properties to set
         * @returns {subscription_plan.SubscriptionPlan} SubscriptionPlan instance
         */
        SubscriptionPlan.create = function create(properties) {
            return new SubscriptionPlan(properties);
        };

        /**
         * Encodes the specified SubscriptionPlan message. Does not implicitly {@link subscription_plan.SubscriptionPlan.verify|verify} messages.
         * @function encode
         * @memberof subscription_plan.SubscriptionPlan
         * @static
         * @param {subscription_plan.ISubscriptionPlan} message SubscriptionPlan message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscriptionPlan.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.code);
            if (message.slug != null && Object.hasOwnProperty.call(message, "slug"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.slug);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.price);
            if (message.extra_fee != null && Object.hasOwnProperty.call(message, "extra_fee"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.extra_fee);
            if (message.invoice_period != null && Object.hasOwnProperty.call(message, "invoice_period"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.invoice_period);
            if (message.invoice_duration != null && Object.hasOwnProperty.call(message, "invoice_duration"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.invoice_duration);
            if (message.trail_period != null && Object.hasOwnProperty.call(message, "trail_period"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.trail_period);
            if (message.trail_duration != null && Object.hasOwnProperty.call(message, "trail_duration"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.trail_duration);
            return writer;
        };

        /**
         * Encodes the specified SubscriptionPlan message, length delimited. Does not implicitly {@link subscription_plan.SubscriptionPlan.verify|verify} messages.
         * @function encodeDelimited
         * @memberof subscription_plan.SubscriptionPlan
         * @static
         * @param {subscription_plan.ISubscriptionPlan} message SubscriptionPlan message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscriptionPlan.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubscriptionPlan message from the specified reader or buffer.
         * @function decode
         * @memberof subscription_plan.SubscriptionPlan
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {subscription_plan.SubscriptionPlan} SubscriptionPlan
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscriptionPlan.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.subscription_plan.SubscriptionPlan();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.code = reader.string();
                    break;
                case 4:
                    message.slug = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.price = reader.int32();
                    break;
                case 7:
                    message.extra_fee = reader.int32();
                    break;
                case 8:
                    message.invoice_period = reader.int32();
                    break;
                case 9:
                    message.invoice_duration = reader.int32();
                    break;
                case 10:
                    message.trail_period = reader.int32();
                    break;
                case 11:
                    message.trail_duration = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SubscriptionPlan message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof subscription_plan.SubscriptionPlan
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {subscription_plan.SubscriptionPlan} SubscriptionPlan
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscriptionPlan.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubscriptionPlan message.
         * @function verify
         * @memberof subscription_plan.SubscriptionPlan
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubscriptionPlan.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.slug != null && message.hasOwnProperty("slug"))
                if (!$util.isString(message.slug))
                    return "slug: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (!$util.isInteger(message.price))
                    return "price: integer expected";
            if (message.extra_fee != null && message.hasOwnProperty("extra_fee"))
                if (!$util.isInteger(message.extra_fee))
                    return "extra_fee: integer expected";
            if (message.invoice_period != null && message.hasOwnProperty("invoice_period"))
                if (!$util.isInteger(message.invoice_period))
                    return "invoice_period: integer expected";
            if (message.invoice_duration != null && message.hasOwnProperty("invoice_duration"))
                switch (message.invoice_duration) {
                default:
                    return "invoice_duration: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.trail_period != null && message.hasOwnProperty("trail_period"))
                if (!$util.isInteger(message.trail_period))
                    return "trail_period: integer expected";
            if (message.trail_duration != null && message.hasOwnProperty("trail_duration"))
                switch (message.trail_duration) {
                default:
                    return "trail_duration: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a SubscriptionPlan message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof subscription_plan.SubscriptionPlan
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {subscription_plan.SubscriptionPlan} SubscriptionPlan
         */
        SubscriptionPlan.fromObject = function fromObject(object) {
            if (object instanceof $root.subscription_plan.SubscriptionPlan)
                return object;
            var message = new $root.subscription_plan.SubscriptionPlan();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.code != null)
                message.code = String(object.code);
            if (object.slug != null)
                message.slug = String(object.slug);
            if (object.description != null)
                message.description = String(object.description);
            if (object.price != null)
                message.price = object.price | 0;
            if (object.extra_fee != null)
                message.extra_fee = object.extra_fee | 0;
            if (object.invoice_period != null)
                message.invoice_period = object.invoice_period | 0;
            switch (object.invoice_duration) {
            case "DAY":
            case 0:
                message.invoice_duration = 0;
                break;
            case "WEEK":
            case 1:
                message.invoice_duration = 1;
                break;
            case "MONTH":
            case 2:
                message.invoice_duration = 2;
                break;
            case "YEAR":
            case 3:
                message.invoice_duration = 3;
                break;
            }
            if (object.trail_period != null)
                message.trail_period = object.trail_period | 0;
            switch (object.trail_duration) {
            case "DAY":
            case 0:
                message.trail_duration = 0;
                break;
            case "WEEK":
            case 1:
                message.trail_duration = 1;
                break;
            case "MONTH":
            case 2:
                message.trail_duration = 2;
                break;
            case "YEAR":
            case 3:
                message.trail_duration = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a SubscriptionPlan message. Also converts values to other types if specified.
         * @function toObject
         * @memberof subscription_plan.SubscriptionPlan
         * @static
         * @param {subscription_plan.SubscriptionPlan} message SubscriptionPlan
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubscriptionPlan.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.code = "";
                object.slug = "";
                object.description = "";
                object.price = 0;
                object.extra_fee = 0;
                object.invoice_period = 0;
                object.invoice_duration = options.enums === String ? "DAY" : 0;
                object.trail_period = 0;
                object.trail_duration = options.enums === String ? "DAY" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.slug != null && message.hasOwnProperty("slug"))
                object.slug = message.slug;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = message.price;
            if (message.extra_fee != null && message.hasOwnProperty("extra_fee"))
                object.extra_fee = message.extra_fee;
            if (message.invoice_period != null && message.hasOwnProperty("invoice_period"))
                object.invoice_period = message.invoice_period;
            if (message.invoice_duration != null && message.hasOwnProperty("invoice_duration"))
                object.invoice_duration = options.enums === String ? $root.subscription_plan.SubscriptionPlan.SubscriptionDuration[message.invoice_duration] : message.invoice_duration;
            if (message.trail_period != null && message.hasOwnProperty("trail_period"))
                object.trail_period = message.trail_period;
            if (message.trail_duration != null && message.hasOwnProperty("trail_duration"))
                object.trail_duration = options.enums === String ? $root.subscription_plan.SubscriptionPlan.SubscriptionDuration[message.trail_duration] : message.trail_duration;
            return object;
        };

        /**
         * Converts this SubscriptionPlan to JSON.
         * @function toJSON
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubscriptionPlan.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * SubscriptionDuration enum.
         * @name subscription_plan.SubscriptionPlan.SubscriptionDuration
         * @enum {number}
         * @property {number} DAY=0 DAY value
         * @property {number} WEEK=1 WEEK value
         * @property {number} MONTH=2 MONTH value
         * @property {number} YEAR=3 YEAR value
         */
        SubscriptionPlan.SubscriptionDuration = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DAY"] = 0;
            values[valuesById[1] = "WEEK"] = 1;
            values[valuesById[2] = "MONTH"] = 2;
            values[valuesById[3] = "YEAR"] = 3;
            return values;
        })();

        return SubscriptionPlan;
    })();

    return subscription_plan;
})();

module.exports = $root;
