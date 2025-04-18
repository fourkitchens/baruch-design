import clsx from "clsx";
import * as motion from "motion/react-client"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    }
  }
}

export default function CenterEcho() {
  const echoes = 6;


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <motion.h1 className="font-bold font-field-gothic uppercase text-[200px] leading-none relative text-trim" 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 1 }}
        >
          {[...Array(echoes)].map((_, i) => {
            const item = {
              hidden: { opacity: 0, scale: `${100 + ((i - 1) * 50)}%` },
              show: { opacity: 1, scale: `${100 + (i * 50)}%`, duration: 0.1 }
            }

            return (
              <motion.div 
                key={i} 
                className={clsx({
                  "duplicate absolute inset-0": i > 0,
                  "original relative ": i === 0
                }, "echo block p-2 text-trim bg-primary-indigo ")}
                style={i > 0 ? {
                  scale: `${100 + (i * 50)}%`,
                  zIndex: echoes * 10 - (i * 10)
                } : {
                  zIndex: echoes * 10
                }}
                variants={item}
                
              >
                Be Undeniable
              </motion.div>
            )
          })}
        </motion.h1>
      </main>

    </div>
  );
}
