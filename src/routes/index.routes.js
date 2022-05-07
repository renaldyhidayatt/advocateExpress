const actRoutes = require("./act.routes");
const contactRoutes = require("./contact.routes");
const appointmentRoutes = require("./appointment.routes");
const caseCategoryRoutes = require("./case_categories.routes");
const caseStageRoutes = require("./case_stages.routes");
const caseStudyRoutes = require("./case_study.routes");
const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");
const courtRoutes = require("./court.routes");
const courtCategoriesRoutes = require("./court_categories.routes");
const departmentRoutes = require("./department.routes");

module.exports = (app) => {
  app.use("/api/acts", actRoutes);
  app.use("/api/contacts", contactRoutes);
  app.use("/api/appointments", appointmentRoutes);
  app.use("/api/case_categories", caseCategoryRoutes);
  app.use("/api/case_stages", caseStageRoutes);
  app.use("/api/case_studies", caseStudyRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/auth", authRoutes);
  app.use("/api/court_categories", courtCategoriesRoutes);
  app.use("/api/courts", courtRoutes);
  app.use("/api/departments", departmentRoutes);
};
