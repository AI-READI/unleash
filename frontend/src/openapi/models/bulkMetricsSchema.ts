/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.22.0-beta.3
 */
import type { BulkRegistrationSchema } from './bulkRegistrationSchema';
import type { ClientMetricsSchema } from './clientMetricsSchema';

export interface BulkMetricsSchema {
    applications?: BulkRegistrationSchema[];
    metrics?: ClientMetricsSchema[];
}