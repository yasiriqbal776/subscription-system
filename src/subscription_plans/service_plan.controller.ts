/* eslint-disable @typescript-eslint/tslint/config */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { rpc } from '../codegen/rpc';
import { SubscriptionPlanService } from '../services/SubscriptionPlan/subscription_plan.service';

import SubscriptionPlans = rpc.ListSubscriptionPlans;
import IEmpty = rpc.IEmpty;

@Controller()
export class SubscriptionPlanController {
  constructor(
    //@inject(new LazyServiceIdentifer(() => SubscriptionPlanService))
    private readonly subscriptionPlanService: SubscriptionPlanService,
  ) {}
  /**
   * Get all subscription plans
   * Test command : grpcurl -plaintext  -proto rpc/rpc.proto 127.0.0.1:5000 rpc.SubscriptionPlanService/FindAll
   * @param {IEmpty} req
   * @returns {Promise<SubscriptionPlans>}
   * @memberof SubscriptionPlanController
   */
  @GrpcMethod('SubscriptionPlanService', 'FindAll')
  async FindAll(req: IEmpty): Promise<SubscriptionPlans> {
    const obj = await this.subscriptionPlanService.findAll();
    return SubscriptionPlans.create({
      subscription_plans: [...obj.edges] as any,
    });
  }
}
