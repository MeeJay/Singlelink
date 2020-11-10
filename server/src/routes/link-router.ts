import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import {UserManager} from "../server/user-manager";
import {DatabaseManager} from "../server/database-manager";
import {Pool} from "pg";
import {AuthUtils} from "../utils/auth-utils";

/**
 * The analytics router maps and provides for all the routes under /link.
 */
export class LinkRouter implements IRouter {
  private readonly userManager: UserManager;

  private fastify: FastifyInstance;
  private databaseManager: DatabaseManager;
  private pool: Pool;

  constructor(fastify: FastifyInstance, databaseManager: DatabaseManager) {
    this.fastify = fastify;
    this.databaseManager = databaseManager;
    this.pool = databaseManager.pool;
    this.userManager = new UserManager(databaseManager);
  }

  registerRoutes(): void {

    this.fastify.post('/link/create', AuthUtils.AuthedRouteOpts, this.CreateLink);
    this.fastify.post('/link/update', AuthUtils.AuthedRouteOpts, this.UpdateLink);
    this.fastify.post('/link/destroy', AuthUtils.AuthedRouteOpts, this.DestroyLink);
    this.fastify.post('/link/reorder', AuthUtils.AuthedRouteOpts, this.ReorderLink);
    this.fastify.post('/link/reset-order', AuthUtils.AuthedRouteOpts, this.ResetLinkOrder);

  }

  /**
   * Route for /link/create
   *
   * Creates a new link.
   *
   * @param request
   * @param reply
   */
  async CreateLink(request: FastifyRequest, reply: FastifyReply) {

  }

  /**
   * Route for /link/update
   *
   * Updates a link for a user.
   *
   * @param request
   * @param reply
   */
  async UpdateLink(request: FastifyRequest, reply: FastifyReply) {

  }

  /**
   * Route for /link/destroy
   *
   * Destroys a link.
   *
   * @param request
   * @param reply
   */
  async DestroyLink(request: FastifyRequest, reply: FastifyReply) {

  }

  /**
   * Route for /link/reorder
   *
   * Sets the reorder value for a link.
   *
   * @param request
   * @param reply
   */
  async ReorderLink(request: FastifyRequest, reply: FastifyReply) {

  }

  /**
   * Route for /link/reset-order
   *
   * Resets the link reorder value for a link.
   *
   * @param request
   * @param reply
   */
  async ResetLinkOrder(request: FastifyRequest, reply: FastifyReply) {

  }
}
