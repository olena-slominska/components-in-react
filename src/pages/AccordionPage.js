import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 'kbjkbj',
      label: 'Can I use React on a project?',
      content: 'You can use React on any project you want. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper elit at metus mollis finibus. Etiam quis orci egestas leo volutpat sodales consequat eu purus. Integer porta congue justo, vitae interdum libero fermentum quis. Proin blandit urna quis maximus aliquet. Nam quam nisl, mattis non faucibus in, pulvinar ac nunc. Morbi ultrices elementum eleifend. Aliquam erat volutpat. Morbi quis nisl commodo, ultrices leo sit amet, tempor quam. Vestibulum at dignissim augue. Praesent in nibh ligula. Sed a placerat nulla.'
    },
    {
      id: 'bjbfksjb',
      label: 'Can I use JS on a project?',
      content: 'You can use JS on any project you want. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper elit at metus mollis finibus. Etiam quis orci egestas leo volutpat sodales consequat eu purus. Integer porta congue justo, vitae interdum libero fermentum quis. Proin blandit urna quis maximus aliquet. Nam quam nisl, mattis non faucibus in, pulvinar ac nunc. Morbi ultrices elementum eleifend. Aliquam erat volutpat. Morbi quis nisl commodo, ultrices leo sit amet, tempor quam. Vestibulum at dignissim augue. Praesent in nibh ligula. Sed a placerat nulla.'
    },
    {
      id: 'bjbj',
      label: 'Can I use CSS on a project?',
      content: 'You can use CSS on any project you want. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper elit at metus mollis finibus. Etiam quis orci egestas leo volutpat sodales consequat eu purus. Integer porta congue justo, vitae interdum libero fermentum quis. Proin blandit urna quis maximus aliquet. Nam quam nisl, mattis non faucibus in, pulvinar ac nunc. Morbi ultrices elementum eleifend. Aliquam erat volutpat. Morbi quis nisl commodo, ultrices leo sit amet, tempor quam. Vestibulum at dignissim augue. Praesent in nibh ligula. Sed a placerat nulla.'
    }
  ];

  return <Accordion items={items} />

}

export default AccordionPage;
