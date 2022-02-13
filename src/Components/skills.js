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
      icon: '/img/skills/css.png',
      children: [{ id: 'sass',
      title: 'Scss',
      tooltip: {
        content:
          '',
      },
      icon: '/img/skills/sass.png',
      children: []}]},{
            
            id: 'html',
            title: 'HTML',
            tooltip: {
              content:
                '',
            },
            icon: '/img/skills/html.png',
            children: [
              {
               
                  id: 'js',
                  title: 'JavaScript',
                  tooltip: {
                    content:
                      '',
                  },
                  icon: '/img/skills/js.png',
                  children: [{
                    id: 'php',
                    title: 'PHP',
                    tooltip: {
                      content:
                        '',
                    },
                    icon: '/img/skills/php.png',
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
              icon: '/img/skills/symfony.png',
              children: [],
              },
              {
                id: 'node',
                title: 'Node.js',
                tooltip: {
                  content:
                    '',
                },
                icon: '/img/skills/node.png',
                children: [{
                  id: 'express',
                  title: 'Express',
                  tooltip: {
                    content:
                      '',
                  },
                  icon: '/img/skills/express.png',
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
                  icon: '/img/skills/react.png',
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
          icon: '/img/skills/unity.png',
          children: [{
            id: 'ue',
            title: 'Unreal Engine',
            activate:'true',
            tooltip: {
              content:
                '',
            },
            icon: '/img/skills/ue.png',
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
          icon: '/img/skills/photoshop.png',
          children: [{
            id: 'figma',
            title: 'Figma',
            activate:'true',
            tooltip: {
              content:
                '',
            },
            icon: '/img/skills/figma.png',
            children: [{
              id: 'blender',
              title: 'Blender',
              activate:'true',
              tooltip: {
                content:
                  '',
              },
              icon: '/img/skills/blender.png',
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
          icon: '/img/skills/mysql.png',
          children: [],
        },{
          id: 'linux',
          title: 'Linux',
          activate:'true',
          tooltip: {
            content:
              '',
          },
          icon: '/img/skills/linux.png',
          children: [],
        },{
          id: 'github',
          title: 'GitHub',
          activate:'true',
          tooltip: {
            content:
              '',
          },
          icon: '/img/skills/github.png',
          children: [{
            id: 'gitlab',
            title: 'Gitlab',
            activate:'true',
            tooltip: {
              content:
                '',
            },
            icon: '/img/skills/gitlab.png',
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
                icon: '/img/skills/python.png',
                children: [{
                  id: 'java',
                  title: 'Java',
                  tooltip: {
                    content:
                      '',
                  },
                  icon: '/img/skills/java.png',
                  children: [{
                    id: 'csharp',
                    title: 'C#',
                    tooltip: {
                      content:
                        '',
                    },
                    icon: '/img/skills/csharp.png',
                    children: [{
                      id: 'cpp',
                      title: 'C++',
                      tooltip: {
                        content:
                          '',
                      },
                      icon: '/img/skills/cpp.png',
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