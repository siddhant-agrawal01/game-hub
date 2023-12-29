import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GeneresSkeleton = () => {
  return (
    <Card  width = '100px' margin= '10px' padding = '20px' borderRadius={10} overflow="hidden" >
      <Skeleton height="600px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GeneresSkeleton;
