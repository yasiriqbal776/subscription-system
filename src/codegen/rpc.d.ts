import * as $protobuf from 'protobufjs';
/** Namespace rpc. */
export namespace rpc {
  /** Represents a SubscriptionPlanService */
  class SubscriptionPlanService extends $protobuf.rpc.Service {
    /**
     * Constructs a new SubscriptionPlanService service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean,
    );

    /**
     * Creates new SubscriptionPlanService service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean,
    ): SubscriptionPlanService;

    /**
     * Calls FindAll.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and ListSubscriptionPlans
     */
    public findAll(
      request: rpc.IEmpty,
      callback: rpc.SubscriptionPlanService.FindAllCallback,
    ): void;

    /**
     * Calls FindAll.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public findAll(request: rpc.IEmpty): Promise<rpc.ListSubscriptionPlans>;
  }

  namespace SubscriptionPlanService {
    /**
     * Callback as used by {@link rpc.SubscriptionPlanService#findAll}.
     * @param error Error, if any
     * @param [response] ListSubscriptionPlans
     */
    type FindAllCallback = (
      error: Error | null,
      response?: rpc.ListSubscriptionPlans,
    ) => void;
  }

  /** Properties of an Empty. */
  interface IEmpty {}

  /** Represents an Empty. */
  class Empty implements IEmpty {
    /**
     * Constructs a new Empty.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IEmpty);

    /**
     * Creates a new Empty instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Empty instance
     */
    public static create(properties?: rpc.IEmpty): rpc.Empty;

    /**
     * Encodes the specified Empty message. Does not implicitly {@link rpc.Empty.verify|verify} messages.
     * @param message Empty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: rpc.IEmpty,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Empty message, length delimited. Does not implicitly {@link rpc.Empty.verify|verify} messages.
     * @param message Empty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: rpc.IEmpty,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes an Empty message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): rpc.Empty;

    /**
     * Decodes an Empty message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): rpc.Empty;

    /**
     * Verifies an Empty message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an Empty message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Empty
     */
    public static fromObject(object: { [k: string]: any }): rpc.Empty;

    /**
     * Creates a plain object from an Empty message. Also converts values to other types if specified.
     * @param message Empty
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: rpc.Empty,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Empty to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ListSubscriptionPlans. */
  interface IListSubscriptionPlans {
    /** ListSubscriptionPlans subscription_plans */
    subscription_plans?: subscription_plan.ISubscriptionPlan[] | null;
  }

  /** Represents a ListSubscriptionPlans. */
  class ListSubscriptionPlans implements IListSubscriptionPlans {
    /**
     * Constructs a new ListSubscriptionPlans.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IListSubscriptionPlans);

    /** ListSubscriptionPlans subscription_plans. */
    public subscription_plans: subscription_plan.ISubscriptionPlan[];

    /**
     * Creates a new ListSubscriptionPlans instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListSubscriptionPlans instance
     */
    public static create(
      properties?: rpc.IListSubscriptionPlans,
    ): rpc.ListSubscriptionPlans;

    /**
     * Encodes the specified ListSubscriptionPlans message. Does not implicitly {@link rpc.ListSubscriptionPlans.verify|verify} messages.
     * @param message ListSubscriptionPlans message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: rpc.IListSubscriptionPlans,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified ListSubscriptionPlans message, length delimited. Does not implicitly {@link rpc.ListSubscriptionPlans.verify|verify} messages.
     * @param message ListSubscriptionPlans message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: rpc.IListSubscriptionPlans,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ListSubscriptionPlans message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListSubscriptionPlans
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): rpc.ListSubscriptionPlans;

    /**
     * Decodes a ListSubscriptionPlans message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListSubscriptionPlans
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): rpc.ListSubscriptionPlans;

    /**
     * Verifies a ListSubscriptionPlans message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ListSubscriptionPlans message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListSubscriptionPlans
     */
    public static fromObject(object: {
      [k: string]: any;
    }): rpc.ListSubscriptionPlans;

    /**
     * Creates a plain object from a ListSubscriptionPlans message. Also converts values to other types if specified.
     * @param message ListSubscriptionPlans
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: rpc.ListSubscriptionPlans,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ListSubscriptionPlans to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }
}

/** Namespace subscription_plan. */
export namespace subscription_plan {
  /** Properties of a SubscriptionPlan. */
  interface ISubscriptionPlan {
    /** SubscriptionPlan id */
    id?: number | null;

    /** SubscriptionPlan name */
    name?: string | null;

    /** SubscriptionPlan code */
    code?: string | null;

    /** SubscriptionPlan slug */
    slug?: string | null;

    /** SubscriptionPlan description */
    description?: string | null;

    /** SubscriptionPlan price */
    price?: number | null;

    /** SubscriptionPlan extra_fee */
    extra_fee?: number | null;

    /** SubscriptionPlan invoice_period */
    invoice_period?: number | null;

    /** SubscriptionPlan invoice_duration */
    invoice_duration?: subscription_plan.SubscriptionPlan.SubscriptionDuration | null;

    /** SubscriptionPlan trail_period */
    trail_period?: number | null;

    /** SubscriptionPlan trail_duration */
    trail_duration?: subscription_plan.SubscriptionPlan.SubscriptionDuration | null;
  }

  /** Represents a SubscriptionPlan. */
  class SubscriptionPlan implements ISubscriptionPlan {
    /**
     * Constructs a new SubscriptionPlan.
     * @param [properties] Properties to set
     */
    constructor(properties?: subscription_plan.ISubscriptionPlan);

    /** SubscriptionPlan id. */
    public id: number;

    /** SubscriptionPlan name. */
    public name: string;

    /** SubscriptionPlan code. */
    public code: string;

    /** SubscriptionPlan slug. */
    public slug: string;

    /** SubscriptionPlan description. */
    public description: string;

    /** SubscriptionPlan price. */
    public price: number;

    /** SubscriptionPlan extra_fee. */
    public extra_fee: number;

    /** SubscriptionPlan invoice_period. */
    public invoice_period: number;

    /** SubscriptionPlan invoice_duration. */
    public invoice_duration: subscription_plan.SubscriptionPlan.SubscriptionDuration;

    /** SubscriptionPlan trail_period. */
    public trail_period: number;

    /** SubscriptionPlan trail_duration. */
    public trail_duration: subscription_plan.SubscriptionPlan.SubscriptionDuration;

    /**
     * Creates a new SubscriptionPlan instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubscriptionPlan instance
     */
    public static create(
      properties?: subscription_plan.ISubscriptionPlan,
    ): subscription_plan.SubscriptionPlan;

    /**
     * Encodes the specified SubscriptionPlan message. Does not implicitly {@link subscription_plan.SubscriptionPlan.verify|verify} messages.
     * @param message SubscriptionPlan message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: subscription_plan.ISubscriptionPlan,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified SubscriptionPlan message, length delimited. Does not implicitly {@link subscription_plan.SubscriptionPlan.verify|verify} messages.
     * @param message SubscriptionPlan message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: subscription_plan.ISubscriptionPlan,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a SubscriptionPlan message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubscriptionPlan
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): subscription_plan.SubscriptionPlan;

    /**
     * Decodes a SubscriptionPlan message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubscriptionPlan
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): subscription_plan.SubscriptionPlan;

    /**
     * Verifies a SubscriptionPlan message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a SubscriptionPlan message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubscriptionPlan
     */
    public static fromObject(object: {
      [k: string]: any;
    }): subscription_plan.SubscriptionPlan;

    /**
     * Creates a plain object from a SubscriptionPlan message. Also converts values to other types if specified.
     * @param message SubscriptionPlan
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: subscription_plan.SubscriptionPlan,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this SubscriptionPlan to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  namespace SubscriptionPlan {
    /** SubscriptionDuration enum. */
    enum SubscriptionDuration {
      DAY = 0,
      WEEK = 1,
      MONTH = 2,
      YEAR = 3,
    }
  }
}
