import React from 'react';
import {
    SkillTreeGroup,
    SkillTree,
    SkillProvider,
    SkillType,
    SkillGroupDataType,
  } from 'beautiful-skill-tree';
   
const Skills = () => {

    const dataWeb : SkillType[] = [
      {
        id: 'web',
        title: 'Web',
        tooltip: {
          content:
            '',
        },
        children: [
      { id: 'css',
      title: 'CSS',
      tooltip: {
        content:
          '',
      },
      icon: process.env.PUBLIC_URL +'/img/skills/css.png',
      children: [{ id: 'sass',
      title: 'Scss',
      tooltip: {
        content:
          '',
      },
      icon: process.env.PUBLIC_URL +'/img/skills/sass.png',
      children: []}]},{
            
            id: 'html',
            title: 'HTML',
            tooltip: {
              content:
                '',
            },
            icon: process.env.PUBLIC_URL +'/img/skills/html.png',
            children: [
              {
               
                  id: 'js',
                  title: 'JavaScript',
                  tooltip: {
                    content:
                      '',
                  },
                  icon: process.env.PUBLIC_URL +'/img/skills/js.png',
                  children: [{
                    id: 'php',
                    title: 'PHP',
                    tooltip: {
                      content:
                        '',
                    },
                    icon: process.env.PUBLIC_URL +'/img/skills/php.png',
                    children: [],
                    }],
                  }
                
            ],
            
            },
            {
              id: 'symfony',
              title: 'Symfony',
              tooltip: {
                content:
                  '',
              },
              icon: process.env.PUBLIC_URL +'/img/skills/symfony.png',
              children: [],
              },
              {
                id: 'node',
                title: 'Node.js',
                tooltip: {
                  content:
                    '',
                },
                icon: process.env.PUBLIC_URL +'/img/skills/node.png',
                children: [{
                  id: 'express',
                  title: 'Express',
                  tooltip: {
                    content:
                      '',
                  },
                  icon: process.env.PUBLIC_URL +'/img/skills/express.png',
                  children: [],
                  }],
                },
                {
                  id: 'react',
                  title: 'React',
                  tooltip: {
                    content:
                      '',
                  },
                  icon: process.env.PUBLIC_URL +'/img/skills/react.png',
                  children: [],
                  }
        ],
      }
    ]
    const dataOther:SkillType[]= [
      {
        id: 'other',
        title: 'Autre',
        activate:'true',
        tooltip: {
          content:
            '',
        },
        children: [ {
          id: 'unity',
          title: 'Unity',
          activate:'true',
          tooltip: {
            content:
              '',
          },
          icon: process.env.PUBLIC_URL +'/img/skills/Unity.png',
          children: [{
            id: 'ue',
            title: 'Unreal Engine',
            activate:'true',
            tooltip: {
              content:
                '',
            },
            icon: process.env.PUBLIC_URL +'/img/skills/ue.png',
            children: [],
          }, ],
        }, {
          id: 'photoshop',
          title: 'Photoshop',
          activate:'true',
          tooltip: {
            content:
              '',
          },
          icon: process.env.PUBLIC_URL +'/img/skills/photoshop.png',
          children: [{
            id: 'figma',
            title: 'Figma',
            activate:'true',
            tooltip: {
              content:
                '',
            },
            icon: process.env.PUBLIC_URL +'/img/skills/figma.png',
            children: [{
              id: 'blender',
              title: 'Blender',
              activate:'true',
              tooltip: {
                content:
                  '',
              },
              icon: process.env.PUBLIC_URL +'/img/skills/blender.png',
              children: [],
            }],
          }, ],
        }, {
          id: 'mysql',
          title: 'MySQL',
          activate:'true',
          tooltip: {
            content:
              '',
          },
          icon: process.env.PUBLIC_URL +'/img/skills/mysql.png',
          children: [],
        },{
          id: 'linux',
          title: 'Linux',
          activate:'true',
          tooltip: {
            content:
              '',
          },
          icon: process.env.PUBLIC_URL +'/img/skills/linux.png',
          children: [],
        },{
          id: 'github',
          title: 'GitHub',
          activate:'true',
          tooltip: {
            content:
              '',
          },
          icon: process.env.PUBLIC_URL +'/img/skills/github.png',
          children: [{
            id: 'gitlab',
            title: 'Gitlab',
            activate:'true',
            tooltip: {
              content:
                '',
            },
            icon: process.env.PUBLIC_URL +'/img/skills/gitlab.png',
            children: [],
          }],
        },],
      }]
    
    const data: SkillType[] = [
            {
              id: 'langages',
              title: 'Langages',
              tooltip: {
                content:
                  '',
              },
              children: [{
                id: 'python',
                title: 'Python',
                tooltip: {
                  content:
                    '',
                },
                icon: process.env.PUBLIC_URL +'/img/skills/python.png',
                children: [{
                  id: 'java',
                  title: 'Java',
                  tooltip: {
                    content:
                      '',
                  },
                  icon: process.env.PUBLIC_URL +'/img/skills/java.png',
                  children: [{
                    id: 'csharp',
                    title: 'C#',
                    tooltip: {
                      content:
                        '',
                    },
                    icon: process.env.PUBLIC_URL +'/img/skills/csharp.png',
                    children: [{
                      id: 'cpp',
                      title: 'C++',
                      tooltip: {
                        content:
                          '',
                      },
                      icon: process.env.PUBLIC_URL +'/img/skills/cpp.png',
                      children: [],
                      }],
                    }],
                  }],
                },
                ],
            },]
  return (
  <div id="skills">
      <h4>Compétences</h4>
      <img class="arrowTitle" src={process.env.PUBLIC_URL +"/img/arrow.png"}></img>
      <div id="skillsTree">
  <SkillTreeGroup theme={{border:'0px',treeBackgroundColor: '#493323a1',tooltipBackgroundColor: '#d1a389',nodeBackgroundColor: '#5b3e29',nodeActiveBackgroundColor: '#89674e',nodeOverlayColor: 'white',nodeHoverBorderColor: ' linear-gradient(#e9ac67, #e9ac67)',nodeBorderColor:'#493323a1'}}>
    {({ skillCount }: SkillGroupDataType) => (
      <SkillTree
        treeId="first-tree"
        
        data={data}
        
      />
      
    )}
  </SkillTreeGroup>
  <SkillTreeGroup theme={{border:'0px',treeBackgroundColor: '#493323a1',tooltipBackgroundColor: '#d1a389',nodeBackgroundColor: '#5b3e29',nodeActiveBackgroundColor: '#89674e',nodeOverlayColor: 'white',nodeHoverBorderColor: ' linear-gradient(#e9ac67, #e9ac67)',nodeBorderColor:'#493323a1'}}>
    {({ skillCount }: SkillGroupDataType) => (
      <SkillTree
        treeId="first-tree"
        
        data={dataWeb}
        
      />
      
    )}
  </SkillTreeGroup>
  <SkillTreeGroup theme={{border:'0px',treeBackgroundColor: '#493323a1',tooltipBackgroundColor: '#d1a389',nodeBackgroundColor: '#5b3e29',nodeActiveBackgroundColor: '#89674e',nodeOverlayColor: 'white',nodeHoverBorderColor: ' linear-gradient(#e9ac67, #e9ac67)',nodeBorderColor:'#493323a1'}}>
    {({ skillCount }: SkillGroupDataType) => (
      <SkillTree
        treeId="first-tree"
        
        data={dataOther}
        
      />
      
    )}
    
  </SkillTreeGroup>
  </div>
  
  
  </div>
  );
};

export default Skills;