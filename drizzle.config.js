import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect:"postgresql",
  schema:"./utils/schema.tsx",
  dbCredentials: {
    url:"postgresql://neondb_owner:npg_SgaZl4O2knmU@ep-small-grass-a8qdmrox-pooler.eastus2.azure.neon.tech/Content.AI?sslmode=require",
  }
});