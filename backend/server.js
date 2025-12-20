require("dotenv").config();


const teamRoutes = require('./routes/teamRoutes.js');
const categoryRoutes = require('./routes/categoryRoutes.js');
const testimonialRoutes = require('./routes/testimonialRoutes.js');
const galleryRoutes = require('./routes/galleryRoutes.js');
const partnerRoutes = require('./routes/partnerRoutes.js');
const serviceRoutes = require('./routes/serviceRoutes.js');
const subscriberRoutes = require('./routes/subscriberRoutes.js');
const contactRoutes = require('./routes/contactRoutes.js');
const news1Routes = require('./routes/news1Routes.js');
const eventRoutes = require('./routes/eventRoutes.js');
const newsRoutes = require('./routes/newsRoutes.js');
const express = require("express");
const cors = require("cors");
const db = require("./models");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const roleRoutes = require("./routes/roleRoutes");
const permissionRoutes = require("./routes/permissionRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/permissions", permissionRoutes);
const PORT = process.env.PORT || 5000;
db.sequelize.sync({ alter: true }).then(() => {
  console.log("Database synced");

app.use("/api/news", newsRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/news1", news1Routes);
app.use("/api/contact", contactRoutes);
app.use("/api/subscriber", subscriberRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/partner", partnerRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/testimonial", testimonialRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/category", categoryRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error("DB Connection Error:", err));