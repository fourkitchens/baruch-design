import clsx from "clsx";
import * as motion from "motion/react-client"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function UnderEcho() {
  const echoes = 6;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-52 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-primary-navy">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <h1 className="font-bold text-center font-sans uppercase text-[200px] leading-none relative text-trim" 
          
        >
          <span className="leading-none mb-0 block text-trim">What starts here</span>
          <motion.div className="relative" 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 1 }}>

            {[...Array(echoes)].map((_, i) => {
              const item = {
                hidden: { opacity: 0, y: 0 },
                show: { opacity: 1, y: i * 50, duration: 0.1 }
              }

              return (
                <motion.div 
                  key={i} 
                  className={clsx({
                    "duplicate absolute inset-0": i > 0,
                    "original relative text-secondary-chartreuse": i === 0
                  }, "echo block p-2 text-trim bg-primary-navy text-[290px]")}
                  style={i > 0 ? {
                    zIndex: echoes * 10 - (i * 10)
                  } : {
                    zIndex: echoes * 10
                  }}
                  variants={item}
                  
                >
                  never stops
                </motion.div>
              )
            })}</motion.div>
        </h1>
      </main>

    </div>
  );
}
