<h2>MEETING 1 NOTES</h2>

1. Set Work flow
2. Research on the framework
3. Youtube tutorials for the work
4. Division of tasks
5. Task Allotment

<h2> Task 3 </h3>
<h3> Prettier </h3>
- <p>To install "Prettier" for a project we need to run the  'npm install --save-dev --save-exact prettier' command in the working directory</p>
- Then check for the ".prettierrc" file in the folder
- We can also verify from the "package.json" file which related dependencies are installed after the execution of the command.

<h3> ESLINT </h3>
- To install "ESLINT" for a project we need to run the  'npm install --save-dev --save-exact eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb' command in the working directory
- Then check for "eslint" modules in the "node_modules" folder
- Furthermore, we can also check for the eslint dependencies and scripts inn the "package.json" file

<h3> Prettier with ESLINT </h3>
- To configure ESLINT with Prettier we need to run the "npm install --save-dev --save-exact eslint-config-prettier eslint-plugin-prettier" command
- We can see that in the "package.json" file, the "parser" attribute now has the following value: "@typescript-eslint/parser"
- We can also see that in the "package.json" file, the "plugins" attribute now has the following value: ["@typescript-eslint","prettier"]




<h2>Project</h2>

Over the past few decades, software testing has advanced rapidly. Manual testing was used initially, followed by early automated, agile, and continuous testing. It has also reached the stage of AI-augmented autonomous testing.
Although it may appear impossible, you can begin implementing AI features that will lay the groundwork for autonomous testing. By accelerating test creation, expanding test coverage, and reducing test maintenance, AI can optimize your optimization. But how does this appear? Let's look at a few examples.
An intelligent design technique known as object recognition automatically recognizes new updates that should be added to the DOM. Framework generation also scans your application and suggests a test framework.

Utilizing testing instruments, test scripts with the necessary input variables are created and run as part of test automation. The only thing that needs to be done by hand is to type in the test instance like a computer script, and the tool takes care of the rest. Despite its benefits, test automation has one drawback: When testing software is updated, constant and persistent monitoring is required.ML steps in to address this issue.
Test cases are generated and updated automatically by the machine learning model, flaws are discovered, and the current code scope is enhanced. Consequently, it helps businesses produce more work of higher quality in less time.

<h3>Different Ways Machine Learning Can Aid with Test Automation</h3>

There are three ways that machine learning can help with test automation. Development teams face the challenge of expanding and maintaining test automation. On the other hand, development teams can write and carry out test scripts using machine learning. They are utilized during the evaluation phase of the post-execution test, which includes analyzing statistics and business implications.

Understanding why ML should be used in automation testing is necessary before delving deeper into how it can assist at each level of the test automation process:
A lot of the time, aspects of mobile and web applications that are either changeable by definition or updated by the developers impact testing consistency.

Testing stability may be compromised when changes are made to the data that the test is based on or, more frequently, when improvements are made directly to the app.
Non-ML testing scripts cannot immediately adapt to and overcome the changes, as mentioned earlier, because they are static. This inability to adjust causes various issues, including test errors, flaky or brittle checks, build failures, unreliable test data, and others.

Let's take a look at a few ways that development teams might benefit from machine learning:
1. Manage a lot of test data: Organizations that use continuous testing development carry out various types of testing daily. Units, API, functionality, accessibility, integration, and other testing forms are all included in this. Without machine learning, these procedures are error-prone, manual, and frequently impossible to carry out. Administrators can more quickly slice, and dice testing data, identify trends, evaluate business threats, and make decisions with the help of ML technology.
2. Perform precise quality evaluations: With DevOps, numerous development groups or teams provide customers with new software and value. Deciding the level of importance, ease of use, and different elements of code dependability on each component is beneficial to engineers.
ML can help teams become more mature and produce better code in less time. The machine learning model can dynamically scan new scripts, security issues can be evaluated, and test coverage gaps can be discovered. A code climate, for instance, might look at every code change made in response to a pull request, look for quality issues, and make the workflow work better. As a result, many DevOps teams now utilize the feature flags approach to gradually reveal new features and conceal them in case of a problem.
Such choices may be made more available with ML calculations via evaluating and looking at explicit deliveries given foreordained datasets and endorsement models.
3. Enhance test reliability In typical test automation programs, test engineers frequently need help to keep the scripts current each time a new version of the application is sent for testing, or new features are added.

A test robotization framework with ML and self-mending capacities may naturally perceive changes and perceive part finder. Between established test automation phases, a display was added that either notified developers and provided prompt assistance or quickly fixed the issue on the fly. Test scripts that are part of CI/CD scheduling algorithms would run much more smoothly and require less developer input if these features were included.

<h3>Considerations for Using ML/AI in Test Automation</h3>

Testing efficiency and procedure are improved when artificial intelligence (AI) and machine learning are used. Products can launch bug-free and with minimal resource use by adopting new technologies. However, it is essential to be familiar with the fundamentals of anything new before beginning. Before using ML/AI in test automation, consider the following points.

<h4>Automation of User Interface Testing</h4> 

Even though physical testing of website graphics is usually fun, the human eye might still miss some bad parts. Using image identification, ML technology aids in identifying and validating UI issues.
Unit checks: When unit tests are designed and executed using machine learning in test automation, developers can concentrate on writing software code. Later in the project life cycle, writing and maintaining AI-based component test scripts is also helpful.

<h4>Testing API:</h4> 

Comfort and ease typically vanish when an API test appears. Monitoring an API is hard because you need to know how the API works and make test cases and scenarios. In automated testing, you can record API events and traffic using machine learning and AI to analyze and design tests.

<h4>Different test scripts</h4> 

The test scripts must be modified for any upgrades, modifications, or code refactoring to be considered helpful. AI and machine learning methods help determine whether a test application will require multiple exams. It also lets you avoid running test cases that don't work, which saves you time and money.

<h4>Constructing a Dataset</h4> 

The datasets are used by AI algorithms. Consequently, test scripts require input data to run. In automation testing, machine learning generates data sets similar to personal profile images and information like age and weight. The data is based on ML algorithms trained and learned from current production datasets. These datasets are suitable for software testing because they are comparable to production data.

Automation of Robotic Processes for Regression Testing: Current IT systems are automated and maintained by RPA.It recognizes and collects data, scans the display, and navigates the systems and features. Automated tasks are carried out entirely by robots using mobile or online applications.
AI and machine learning (ML) are still in their infancy but hold enormous potential to enhance the current test automation environment significantly. Test automation will become the preferred method thanks to ML. Visual test automation also relies heavily on AI. Accelerating speed and accuracy will make testing easier for testers.

<h3>Applications of ML and AI in testing </h3>

Here are some examples of how testing incorporates Artificial Intelligence.

<h4>Detecting and differentiating mobile app crashes (NimbleApp)</h4>

Frameworks like NimbleApp from Headspin can automatically index your software after each PR crash has been verified, allowing test engineers to concentrate on more practical tests. Detecting and differentiating mobile app crashes (NimbleApp)Engineers can now carry out more basic tests like automating the detection of memory leaks (iOS) or troubleshooting JNI integration (Android), thanks to this.

<h4>Static Program Review (deepcode.ai) </h4>

Symbolic AI uses rules to make decisions. In the 1980s, there was a lot of optimism that such rules-based expert systems would be the foundation for Japan's efforts to develop 5th-generation computing. Unfortunately, the objectives were too lofty (measures were taken to encode all of the rules into specific domains), and the calculation could have been more cost-effective in cloud-based commodity modelling today. But over time, things have changed because (a) data processing has become cheaper and easier to buy, and (b) people now know better that these techniques are best for well-defined and organized domains.

One example is Deepcode.ai.They use symbolic AI to review the code, overcome contamination analysis limitations to find potential attack vectors in the code and adhere to best coding practices.

<h4>Leveraging user traffic and ML to compute test coverage and automated generation of tests (ProdPerfect)</h4>

One of the issues with test management is that we assign equal weight to each test. This is not the case; some tests are more likely to result in a user error than others simply because certain functions are rarely used. Consider that your regression kit runs thousands of test cases, each of which takes a few minutes. The ProdPerfect strategy is to tool your website, assemble click data, and then utilize data analytics and ML to determine which of the key user flows should be examined. Then it creates test code to produce a comprehensive test suite automatically.

<h4>Leveraging AI/ML to conclude on whether to conduct a recall when the test implementation is faulty (Harness.io)</h4>
One issue with Continuous Deployment (CD) is as follows: How do you know if you’ve made a mistake and need to roll back your deployment right away? Harness.io seeks to solve this issue by analyzing observability data from APM tools such as Sumo Logic, New Relic, and AppDynamics to determine whether automatic rollback is required.

<h4>Monitoring and forecasting (Splunk)</h4>

Splunk is a common tool for system observability. The main application is log aggregation and analysis. They do, however, offer a Machine Learning Toolkit (MLTK) that enables users to configure standard ML algorithms, such as Linear and Logistic Regression, K-means clustering, and so on, to Splunk data. Splunk recently unveiled MLTK Smart Assistants to make it even simpler.

<h4> Error search</h4>

Perfection does not exist and cannot be achieved. Because of this, even the best developers and testers can still produce bizarre and erroneous test codes. Test codes that are wacky or flaky help efficiency and quality assurance and ultimately save time. It may be challenging at times to locate the error code's precise location. In some situations, ML and AI-based tools can examine principles in real-time, find errors, and make corrections.

<h3>AI Testing tools currently on the market </h3>

By developing AI-based tools competing in the market, testing tool companies have been attempting to surpass one another. A few devices meet expectations, even though many still need to fulfil marketing promises. A few popular AI-based testing tools are listed here.

<h4>Test.AI</h4> 

Test.ai primarily serves as a complement to other primary tools like Appium and Selenium. Reducing test time improves the test process and boosts efficiency by lowering the likelihood of downtime and errors.

<h4>Applitools</h4>

Applitools is a well-known device that upholds visual component testing. From a user interface perspective, this AI-powered tool finds flaws and errors. It offers a comprehensive, end-to-end testing plan; The tool evaluates, scans, and records what it sees. Additionally, Applitool has adaptive features that ensure that it continues to evolve and function effectively despite algorithm changes.

<h4>Mabel</h4> 

This tool reduces the amount of code script writing and saves time by utilizing machine learning and adaptive capabilities. You only need to use the Mabel language to connect your test to the program. After that, the tool will start working by your preferred course of action.

<h4>TestCraft</h4> 

Testcraft is an AI-based tool that integrates well with Selenium and is simple. Non-professional testers can effectively utilize this tool because it is user-friendly and does not require solid technical skills or programming knowledge. Testcraft aids in reducing test duration and costs.

<h4>Sauce Labs </h4>

The Sauce Lab's creators claim it is the most effective tool for continuous testing. Even though this claim is not easy to verify, it is a very reliable tool. Sauce Labs is a handy tool because it works with many browsers, operating systems, simulators, and emulators. It uses machine learning's adaptability and is hosted in the cloud.

