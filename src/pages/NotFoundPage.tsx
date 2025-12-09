import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Home, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div
      className="min-h-screen bg-background flex items-center justify-center p-4"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="text-center max-w-md">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="relative mb-8"
        >
          <div className="text-[180px] md:text-[220px] font-bold text-primary/10 leading-none select-none">
            404
          </div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Snowflake className="w-20 h-20 md:w-24 md:h-24 text-primary" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("notFound.title")}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {t("notFound.description")}
          </p>

          <Button asChild size="lg" className="group">
            <Link to="/">
              <Home className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
              {t("notFound.back")}
            </Link>
          </Button>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 20,
                opacity: 0,
              }}
              animate={{
                y: -20,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
