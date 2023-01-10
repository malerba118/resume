import {
  Link,
  Flex,
  Box,
  Heading,
  Avatar,
  Text,
  Badge,
  Divider,
  Stack,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react";
import { RiGithubFill, RiMediumFill, RiTwitterFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import "./App.css";

const experiences = [
  {
    title: "Diode",
    subtitle: "Founding Engineer",
    timeRange: "2021-2022",
    body: `Built web-based 3D hardware simulator capable of simulating analog circuits and microcontrollers.`,
    tags: ["TypeScript", "Next.js", "Supabase", "Chakra-UI"],
    color: "teal",
  },
  {
    title: "Target",
    subtitle: "Senior Software Engineer",
    timeRange: "2017 - 2021",
    body: `Worked on several UI's and API's across merchandise, supply chain, and dev-ops.`,
    tags: ["TypeScript", "React", "Angular", "Node", "Docker"],
    color: "red",
  },
  {
    title: "Rochester Institute of Technology",
    subtitle: "BS in Computer Science - 3.95 GPA",
    timeRange: "2012 - 2017",
    body: `Studied Computer Science at RIT in Rochester, NY. Completed 4 years of study and 1 year of internships.
  Interned with Paychex as a Java Developer, Epic as a Data Scientist, and Target as a Software Engineer.
  `,
    tags: ["JavaScript", "Python", "Java", "C", "Django"],
    color: "orange",
  },
];

const projects = [
  {
    title: "Scrollex",
    timeRange: "2022",
    body: `I published a library that lets devs build scroll experiences declaratively.`,
    tags: ["TypeScript", "framer-motion"],
    color: "blue",
    link: "https://github.com/malerba118/scrollex",
  },
  {
    title: "Elementos",
    timeRange: "2020",
    body: `I published a framework-agnostic, reactive state management library.`,
    tags: ["TypeScript", "npm"],
    color: "blue",
    link: "https://malerba118.github.io/elementos-docs/",
  },
  {
    title: "Snowbox",
    timeRange: "2020",
    body: `I built a CodeSandbox clone for internal use at Target.
  `,
    tags: ["Chakra-UI", "React", "Mongo", "Snowpack"],
    color: "blue",
    link: "https://drive.google.com/file/d/1li65WH-6ZmBRtGVtgz2-eIjkjoLS7F4j/view?usp=sharing",
  },
  {
    title: "react-particle-image",
    timeRange: "2020",
    body: `I published a component that renders images as interactive particles.
  `,
    tags: ["TypeScript", "React", "npm"],
    color: "blue",
    link: "https://github.com/malerba118/react-particle-image",
  },
  {
    title: "Iconik Studio",
    timeRange: "2018",
    body: `I built an svg editor via ionic-angular for iOS/Android.
  `,
    tags: ["ionic", "Angular", "fabricjs", "PouchDB"],
    color: "blue",
    link: "https://drive.google.com/file/d/1D2UOPYsPDcutjtIlckQrJJBv7H7uchOm/view?usp=sharing",
  },
  {
    title: "Blog",
    timeRange: "2017 - 2020",
    body: `I write tech articles for freeCodeCamp, HackerNoon, and Better Programming.
  `,
    tags: ["JavaScript", "React"],
    color: "blue",
    link: "https://austinmalerba.medium.com/",
  },
];

function App() {
  return (
    <Grid h="100%" placeItems="center">
      <Grid className="paper-container" p="1in" placeItems="center">
        <Box
          className="paper"
          w="8.5in"
          minW="8.5in"
          h="11in"
          p=".75in"
          rounded="md"
          boxShadow="lg"
          bg="white"
        >
          <Stack spacing="5">
            <Flex>
              <Link isExternal href="https://malerba118.github.io/resume/">
                <Avatar src="me2.JPG" />
              </Link>
              <Box ml="3">
                <Text fontWeight="bold">Austin Malerba</Text>
                <Text fontSize="sm" fontWeight="500" color="gray.600">
                  Web Developer - USA - Mountain Time
                </Text>
              </Box>
            </Flex>
            <Divider />
            {experiences.map((experience) => (
              <Stack
                key={experience.title}
                borderLeftColor={`${experience.color}.300`}
                borderLeftWidth="4px"
                px="2"
                spacing={1}
              >
                <Box>
                  <Flex align="center">
                    <Text size="sm" fontWeight="bold">
                      {experience.title}
                    </Text>
                    <Text
                      fontSize="xs"
                      fontWeight="600"
                      color="gray.600"
                      ml="2"
                      mt="0.1rem"
                    >
                      ({experience.timeRange})
                    </Text>
                  </Flex>
                  <Text fontSize="sm" fontWeight="500" color="gray.600">
                    {experience.subtitle}
                  </Text>
                </Box>
                <Text fontSize="xs" fontWeight="400" color="gray.900">
                  {experience.body}
                </Text>
                <Stack pt={1} isInline>
                  {experience.tags.map((tag) => (
                    <Badge
                      opacity={0.75}
                      fontSize=".66rem"
                      variant="outline"
                      key={tag}
                      colorScheme={experience.color}
                    >
                      {tag}
                    </Badge>
                  ))}
                </Stack>
              </Stack>
            ))}
            <Text fontSize="xl" fontWeight="bold">
              Projects
            </Text>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              {projects.map((project) => (
                <GridItem h="1.25in" colSpan={1} borderWidth={1} rounded="md">
                  <Flex direction="column" key={project.title} p={4} h="100%">
                    <Box>
                      <Text size="sm" fontWeight="bold">
                        <Link color="blue.500" isExternal href={project.link}>
                          {project.title}
                        </Link>
                      </Text>
                    </Box>
                    <Text
                      noOfLines={2}
                      flex={1}
                      fontSize="xs"
                      fontWeight="400"
                      color="gray.900"
                    >
                      {project.body}
                    </Text>
                    <Stack isInline>
                      {project.tags.map((tag) => (
                        <Badge
                          opacity={0.75}
                          fontSize=".66rem"
                          variant="outline"
                          key={tag}
                          colorScheme={"blue"}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </Stack>
                  </Flex>
                </GridItem>
              ))}
            </Grid>
            <GridItem rowSpan="auto" />
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              <Stack spacing="1" isInline>
                <Icon fontSize="lg" as={RiGithubFill} />
                <Text fontSize="xs" fontWeight="600" color="gray.600">
                  <Link isExternal href="https://github.com/malerba118">
                    malerba118
                  </Link>
                </Text>
              </Stack>
              <Stack spacing="1" isInline textAlign="center">
                <Icon fontSize="lg" as={IoIosMail} />
                <Text fontSize="xs" fontWeight="600" color="gray.600">
                  austin.malerba@gmail.com
                </Text>
              </Stack>
              <Stack spacing="1" isInline justify="flex-end">
                <Icon fontSize="lg" as={RiTwitterFill} />
                <Text fontSize="xs" fontWeight="600" color="gray.600">
                  <Link isExternal href="https://twitter.com/MalerbaAustin">
                    Twitter
                  </Link>
                </Text>
              </Stack>
            </Grid>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
