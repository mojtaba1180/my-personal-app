import { IconLamp2 } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { CategoryTagContainer, CategoryTagContainerItem, CategoryTagIcon, CategoryTagTitle } from "./category-tag.style";



function ServicesCategoryTagItem(){
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

function ServicesCategoryTag() {

    return (
        <CategoryTagContainer>
            {
                [1,2,3,4].map((item,i) => {
                    return (
                        <motion.div
                          key={i}
                          initial={{ x: "-10px", opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: i / 10 }}
                         >
                            <ServicesCategoryTagItem  />
                        </motion.div>
                    )
                })
            }
        </CategoryTagContainer>
    )
}

export default ServicesCategoryTag;