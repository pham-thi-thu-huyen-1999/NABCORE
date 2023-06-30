import React, { useState } from 'react';
import Heading from '../common/Heading';
import { ProtectStyle, Description } from "./style";
import { motion } from "framer-motion";

function Protect(props) {
    const { protect, index, onSetActiveSelected } = props;
    const variants = {
        open: { opacity: 1, y: 0 }
    }
    return <ProtectStyle onClick={() => onSetActiveSelected(index)}
        // @ts-ignore
        $mode={protect.active ? "active" : ""}>
        <Heading
            tagName="h2"
            title={`${index + 1}. ${protect.title}`}
            customClass={protect.active ? "yellow" : ""} />

        <motion.div
            key={protect.active ? "" : "empty"}
            initial={{ opacity: 0, y: -30 }}
            animate={protect.active ? "open" : ""}
            transition={{ duration: 0.3 }}
            variants={variants}
        >
            {
                protect.active ? <Description
                    dangerouslySetInnerHTML={{ __html: protect.content }}
                /> : null
            }
        </motion.div>
    </ProtectStyle>
}

export default Protect
