import { AppDataSource } from "../data-source";
import { Partner } from "../entity/Partner";
import { Controller } from "./base.controller";

export class PartnerController extends Controller {
    repository = AppDataSource.getRepository(Partner);
}