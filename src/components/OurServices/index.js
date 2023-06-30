import React, { useEffect, useState } from 'react';
import { Container } from "../common/Container/style";
import { OurServicesStyle, Description, TitlesStyle, ItemTitle, ContentService } from "./style";
import Heading from '../common/Heading';
import Button from '../common/Button';
import { motion } from "framer-motion"
function OurServices(props) {
  const { ourService } = props;
  let [checkService, setCheckService] = useState(0);
  const colorYellow = (index) => { return checkService === index ? "yellow" : "" }
  const variants = {
    open: { opacity: 1, x: 0 }
  }
  return <OurServicesStyle>
    <Heading tagName="h2" title="Our Services" customClass="yellow" />
    <Container className="ourservice-container">
      {/* title list */}
      <TitlesStyle>
        {ourService.map((item, index) => (
          <ItemTitle onClick={() => setCheckService(index)} className={colorYellow(index)}>
            <Heading tagName="h2" title={item.title} customClass={colorYellow(index)} />
          </ItemTitle>
        ))}
      </TitlesStyle>
      <ContentService>
        <motion.div
          key={checkService !== -1 ? checkService : "empty"}
          initial={{ opacity: 0, x: 100 }}
          animate={checkService !== -1 ? "open" : ""}
          transition={{ duration: 0.5 }}
          variants={variants}
        >
          {checkService !== -1 ?
            <Description dangerouslySetInnerHTML={{ __html: ourService[checkService].content }} /> : ""}
        </motion.div>
        <Button icon>
          {ourService[checkService].button.title}
        </Button>
      </ContentService>
    </Container>
  </OurServicesStyle >
}

export default OurServices
