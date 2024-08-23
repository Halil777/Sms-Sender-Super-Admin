import React from "react";
import { Row, Col } from "antd";
import {
  UserOutlined,
  WarningOutlined,
  StopOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import useDashboardData from "../hooks/useDashboardData";
import { formatNumber } from "../logic/DashboardLogic";
import { DashboardCardProps } from "../interface/DashboardInterfaces";
import {
  CardCount,
  CardText,
  IconWrapper,
  StyledCard,
  TextWrapper,
  CardHeader,
} from "../style/DashboardStyle";
import { motion } from "framer-motion";

const Dashboard: React.FC = () => {
  const data = useDashboardData();

  return (
    <Row gutter={[16, 16]}>
      {data && (
        <>
          <DashboardCard
            icon={<UserOutlined />}
            text="Clients"
            count={data.clientsCount}
            delay={0}
          />
          <DashboardCard
            icon={<WarningOutlined />}
            text="Danger"
            count={data.dangerCount}
            delay={0.3}
          />
          <DashboardCard
            icon={<StopOutlined />}
            text="Blacklist Words"
            count={data.blacklistCount}
            delay={0.5}
          />
          <DashboardCard
            icon={<PhoneOutlined />}
            text="Phone Numbers"
            count={data.phoneCount}
            delay={0.7}
          />
        </>
      )}
    </Row>
  );
};

const DashboardCard: React.FC<DashboardCardProps & { delay: number }> = ({
  icon,
  text,
  count,
  delay,
}) => {
  return (
    <Col xs={24} sm={12} md={8} lg={6}>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay }}
      >
        <StyledCard>
          <CardHeader>
            <IconWrapper>{icon}</IconWrapper>
            <CardText>{text}</CardText>
          </CardHeader>
          <TextWrapper>
            <CardCount>{formatNumber(count)}</CardCount>
          </TextWrapper>
        </StyledCard>
      </motion.div>
    </Col>
  );
};

export default Dashboard;
