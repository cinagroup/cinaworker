/**
 * Configuration constants for OpenClaw Sandbox
 */
import type { OpenClawEnv } from './types';

/** Port that the OpenClaw gateway listens on inside the container */
export const GATEWAY_PORT = 18789;

/** Maximum time to wait for the gateway to start (3 minutes) */
export const STARTUP_TIMEOUT_MS = 180_000;

/** Primary branded gateway token, with the old Moltbot name retained as a compatibility alias. */
export function getGatewayToken(env: OpenClawEnv): string | undefined {
  return env.CINAWORKER_GATEWAY_TOKEN || env.MOLTBOT_GATEWAY_TOKEN;
}
