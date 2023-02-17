import { IconLamp2 } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { CategoryTagContainer, CategoryTagContainerItem, CategoryTagIcon, CategoryTagTitle } from "./category-tag.style";



function AboutCategoryTagItem(){
        return (
            <CategoryTagContainerItem>
                    <CategoryTagIcon>
                        <IconLamp2 />
                    </CategoryTagIcon> 
                    <CategoryTagTitle>
                        Software Designer Pattern
                    </CategoryTagTitle>
            </CategoryTagContainerItem>
        )
}

function AboutCategoryTag() {
      const itemVariants = {
        initial: { x: "-10px", opacity: 0 },
        animate: { x: 0, opacity: 1 },
      };
    return (
        <CategoryTagContainer>
            {
                [1,2,3,4].map((item,i) => {
                    return (
                        <motion.div
                          key={i}
                          variants={itemVariants}
                          initial="initial"
                          animate="animate"
                          transition={{ duration: 0.3, delay: i / 10 }}
                         >
                            <AboutCategoryTagItem  />
                        </motion.div>
                    )
                })
            }
        </CategoryTagContainer>
    )
}

export default AboutCategoryTag;