import app from "./app.js";
import { initDatabase } from "./database/init.js";

const PORT = 3000;

async function bootstrap() {
  try {
    await initDatabase();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(`Failed to star application: ${error}`);
    process.exit(1);
  }
}

bootstrap();
