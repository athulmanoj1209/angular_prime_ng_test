import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ImageService {
    getData() {
        return [
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4s.jpg',
                alt: 'Description for Image 4',
                title: 'Title 4'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5s.jpg',
                alt: 'Description for Image 5',
                title: 'Title 5'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6s.jpg',
                alt: 'Description for Image 6',
                title: 'Title 6'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria7.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria7s.jpg',
                alt: 'Description for Image 7',
                title: 'Title 7'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria8.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria8s.jpg',
                alt: 'Description for Image 8',
                title: 'Title 8'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria9.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria9s.jpg',
                alt: 'Description for Image 9',
                title: 'Title 9'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria10s.jpg',
                alt: 'Description for Image 10',
                title: 'Title 10'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria11s.jpg',
                alt: 'Description for Image 11',
                title: 'Title 11'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria12.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria12s.jpg',
                alt: 'Description for Image 12',
                title: 'Title 12'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria13.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria13s.jpg',
                alt: 'Description for Image 13',
                title: 'Title 13'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria14.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria14s.jpg',
                alt: 'Description for Image 14',
                title: 'Title 14'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria15.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria15s.jpg',
                alt: 'Description for Image 15',
                title: 'Title 15'
            }
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }

    getTreeNodesData() {
        return [
            {
                key: '0',
                label: 'Documents',
                data: 'Documents Folder',
                icon: 'pi pi-fw pi-inbox',
                children: [
                    {
                        key: '0-0',
                        label: 'Work',
                        data: 'Work Folder',
                        icon: 'pi pi-fw pi-cog',
                        children: [
                            { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                            { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
                        ]
                    },
                    {
                        key: '0-1',
                        label: 'Home',
                        data: 'Home Folder',
                        icon: 'pi pi-fw pi-home',
                        children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
                    }
                ]
            },
            {
                key: '1',
                label: 'Events',
                data: 'Events Folder',
                icon: 'pi pi-fw pi-calendar',
                children: [
                    { key: '1-0', label: 'Meeting', icon: 'pi pi-fw pi-calendar-plus', data: 'Meeting' },
                    { key: '1-1', label: 'Product Launch', icon: 'pi pi-fw pi-calendar-plus', data: 'Product Launch' },
                    { key: '1-2', label: 'Report Review', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' }
                ]
            },
            {
                key: '2',
                label: 'Movies',
                data: 'Movies Folder',
                icon: 'pi pi-fw pi-star-fill',
                children: [
                    {
                        key: '2-0',
                        icon: 'pi pi-fw pi-star-fill',
                        label: 'Al Pacino',
                        data: 'Pacino Movies',
                        children: [
                            { key: '2-0-0', label: 'Scarface', icon: 'pi pi-fw pi-video', data: 'Scarface Movie' },
                            { key: '2-0-1', label: 'Serpico', icon: 'pi pi-fw pi-video', data: 'Serpico Movie' }
                        ]
                    },
                    {
                        key: '2-1',
                        label: 'Robert De Niro',
                        icon: 'pi pi-fw pi-star-fill',
                        data: 'De Niro Movies',
                        children: [
                            { key: '2-1-0', label: 'Goodfellas', icon: 'pi pi-fw pi-video', data: 'Goodfellas Movie' },
                            { key: '2-1-1', label: 'Untouchables', icon: 'pi pi-fw pi-video', data: 'Untouchables Movie' }
                        ]
                    }
                ]
            }
        ];
    }

    getTreeTableNodesData() {
        return [
            {
                key: '0',
                data: {
                    name: 'Applications',
                    size: '100kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '0-0',
                        data: {
                            name: 'React',
                            size: '25kb',
                            type: 'Folder'
                        },
                        children: [
                            {
                                key: '0-0-0',
                                data: {
                                    name: 'react.app',
                                    size: '10kb',
                                    type: 'Application'
                                }
                            },
                            {
                                key: '0-0-1',
                                data: {
                                    name: 'native.app',
                                    size: '10kb',
                                    type: 'Application'
                                }
                            },
                            {
                                key: '0-0-2',
                                data: {
                                    name: 'mobile.app',
                                    size: '5kb',
                                    type: 'Application'
                                }
                            }
                        ]
                    },
                    {
                        key: '0-1',
                        data: {
                            name: 'editor.app',
                            size: '25kb',
                            type: 'Application'
                        }
                    },
                    {
                        key: '0-2',
                        data: {
                            name: 'settings.app',
                            size: '50kb',
                            type: 'Application'
                        }
                    }
                ]
            },
            {
                key: '1',
                data: {
                    name: 'Cloud',
                    size: '20kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '1-0',
                        data: {
                            name: 'backup-1.zip',
                            size: '10kb',
                            type: 'Zip'
                        }
                    },
                    {
                        key: '1-1',
                        data: {
                            name: 'backup-2.zip',
                            size: '10kb',
                            type: 'Zip'
                        }
                    }
                ]
            },
            {
                key: '2',
                data: {
                    name: 'Desktop',
                    size: '150kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '2-0',
                        data: {
                            name: 'note-meeting.txt',
                            size: '50kb',
                            type: 'Text'
                        }
                    },
                    {
                        key: '2-1',
                        data: {
                            name: 'note-todo.txt',
                            size: '100kb',
                            type: 'Text'
                        }
                    }
                ]
            },
            {
                key: '3',
                data: {
                    name: 'Documents',
                    size: '75kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '3-0',
                        data: {
                            name: 'Work',
                            size: '55kb',
                            type: 'Folder'
                        },
                        children: [
                            {
                                key: '3-0-0',
                                data: {
                                    name: 'Expenses.doc',
                                    size: '30kb',
                                    type: 'Document'
                                }
                            },
                            {
                                key: '3-0-1',
                                data: {
                                    name: 'Resume.doc',
                                    size: '25kb',
                                    type: 'Resume'
                                }
                            }
                        ]
                    },
                    {
                        key: '3-1',
                        data: {
                            name: 'Home',
                            size: '20kb',
                            type: 'Folder'
                        },
                        children: [
                            {
                                key: '3-1-0',
                                data: {
                                    name: 'Invoices',
                                    size: '20kb',
                                    type: 'Text'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                key: '4',
                data: {
                    name: 'Downloads',
                    size: '25kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '4-0',
                        data: {
                            name: 'Spanish',
                            size: '10kb',
                            type: 'Folder'
                        },
                        children: [
                            {
                                key: '4-0-0',
                                data: {
                                    name: 'tutorial-a1.txt',
                                    size: '5kb',
                                    type: 'Text'
                                }
                            },
                            {
                                key: '4-0-1',
                                data: {
                                    name: 'tutorial-a2.txt',
                                    size: '5kb',
                                    type: 'Text'
                                }
                            }
                        ]
                    },
                    {
                        key: '4-1',
                        data: {
                            name: 'Travel',
                            size: '15kb',
                            type: 'Text'
                        },
                        children: [
                            {
                                key: '4-1-0',
                                data: {
                                    name: 'Hotel.pdf',
                                    size: '10kb',
                                    type: 'PDF'
                                }
                            },
                            {
                                key: '4-1-1',
                                data: {
                                    name: 'Flight.pdf',
                                    size: '5kb',
                                    type: 'PDF'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                key: '5',
                data: {
                    name: 'Main',
                    size: '50kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '5-0',
                        data: {
                            name: 'bin',
                            size: '50kb',
                            type: 'Link'
                        }
                    },
                    {
                        key: '5-1',
                        data: {
                            name: 'etc',
                            size: '100kb',
                            type: 'Link'
                        }
                    },
                    {
                        key: '5-2',
                        data: {
                            name: 'var',
                            size: '100kb',
                            type: 'Link'
                        }
                    }
                ]
            },
            {
                key: '6',
                data: {
                    name: 'Other',
                    size: '5kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '6-0',
                        data: {
                            name: 'todo.txt',
                            size: '3kb',
                            type: 'Text'
                        }
                    },
                    {
                        key: '6-1',
                        data: {
                            name: 'logo.png',
                            size: '2kb',
                            type: 'Picture'
                        }
                    }
                ]
            },
            {
                key: '7',
                data: {
                    name: 'Pictures',
                    size: '150kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '7-0',
                        data: {
                            name: 'barcelona.jpg',
                            size: '90kb',
                            type: 'Picture'
                        }
                    },
                    {
                        key: '7-1',
                        data: {
                            name: 'primeng.png',
                            size: '30kb',
                            type: 'Picture'
                        }
                    },
                    {
                        key: '7-2',
                        data: {
                            name: 'prime.jpg',
                            size: '30kb',
                            type: 'Picture'
                        }
                    }
                ]
            },
            {
                key: '8',
                data: {
                    name: 'Videos',
                    size: '1500kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '8-0',
                        data: {
                            name: 'primefaces.mkv',
                            size: '1000kb',
                            type: 'Video'
                        }
                    },
                    {
                        key: '8-1',
                        data: {
                            name: 'intro.avi',
                            size: '500kb',
                            type: 'Video'
                        }
                    }
                ]
            }
        ];
    }

    getLazyNodesData() {
        return [
            {
                "label": "Lazy Node 0",
                "data": "Node 0",
                "expandedIcon": "pi pi-folder-open",
                "collapsedIcon": "pi pi-folder",
                "leaf": false
            },
            {
                "label": "Lazy Node 1",
                "data": "Node 1",
                "expandedIcon": "pi pi-folder-open",
                "collapsedIcon": "pi pi-folder",
                "leaf": false
            },
            {
                "label": "Lazy Node 1",
                "data": "Node 2",
                "expandedIcon": "pi pi-folder-open",
                "collapsedIcon": "pi pi-folder",
                "leaf": false
            }
        ]
    }

    getFileSystemNodesData() {
        return [
            {
                "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
                "children": [
                    {
                        "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
                        "children": [
                            {
                                "data": {
                                    "name": "angular.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://img.icons8.com/color/1200/angularjs.jpg"
                                }
                            },
                            {
                                "data": {
                                    "name": "cli.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
                                }
                            },
                            {
                                "data": {
                                    "name": "mobile.app",
                                    "size": "5mb",
                                    "type": "Application",
                                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "name": "editor.app",
                            "size": "25mb",
                            "type": "Application",
                            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
                        }
                    },
                    {
                        "data": {
                            "name": "settings.app",
                            "size": "50mb",
                            "type": "Application",
                            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
                        }
                    }
                ]
            },
            {
                "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
                "children": [
                    {
                        "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
                        "children": [
                            {
                                "data": {
                                    "name": "angular.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://img.icons8.com/color/1200/angularjs.jpg"
                                }
                            },
                            {
                                "data": {
                                    "name": "cli.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
                                }
                            },
                            {
                                "data": {
                                    "name": "mobile.app",
                                    "size": "5mb",
                                    "type": "Application",
                                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "name": "editor.app",
                            "size": "25mb",
                            "type": "Application",
                            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
                        }
                    },
                    {
                        "data": {
                            "name": "settings.app",
                            "size": "50mb",
                            "type": "Application",
                            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
                        }
                    }
                ]
            },
            {
                "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
                "children": [
                    {
                        "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
                        "children": [
                            {
                                "data": {
                                    "name": "angular.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://img.icons8.com/color/1200/angularjs.jpg"
                                }
                            },
                            {
                                "data": {
                                    "name": "cli.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
                                }
                            },
                            {
                                "data": {
                                    "name": "mobile.app",
                                    "size": "5mb",
                                    "type": "Application",
                                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "name": "editor.app",
                            "size": "25mb",
                            "type": "Application",
                            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
                        }
                    },
                    {
                        "data": {
                            "name": "settings.app",
                            "size": "50mb",
                            "type": "Application",
                            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
                        }
                    }
                ]
            },
            {
                "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
                "children": [
                    {
                        "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
                        "children": [
                            {
                                "data": {
                                    "name": "angular.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://img.icons8.com/color/1200/angularjs.jpg"
                                }
                            },
                            {
                                "data": {
                                    "name": "cli.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
                                }
                            },
                            {
                                "data": {
                                    "name": "mobile.app",
                                    "size": "5mb",
                                    "type": "Application",
                                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "name": "editor.app",
                            "size": "25mb",
                            "type": "Application",
                            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
                        }
                    },
                    {
                        "data": {
                            "name": "settings.app",
                            "size": "50mb",
                            "type": "Application",
                            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
                        }
                    }
                ]
            },
            {
                "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
                "children": [
                    {
                        "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
                        "children": [
                            {
                                "data": {
                                    "name": "angular.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://img.icons8.com/color/1200/angularjs.jpg"
                                }
                            },
                            {
                                "data": {
                                    "name": "cli.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
                                }
                            },
                            {
                                "data": {
                                    "name": "mobile.app",
                                    "size": "5mb",
                                    "type": "Application",
                                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "name": "editor.app",
                            "size": "25mb",
                            "type": "Application",
                            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
                        }
                    },
                    {
                        "data": {
                            "name": "settings.app",
                            "size": "50mb",
                            "type": "Application",
                            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
                        }
                    }
                ]
            },
            {
                "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
                "children": [
                    {
                        "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
                        "children": [
                            {
                                "data": {
                                    "name": "angular.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://img.icons8.com/color/1200/angularjs.jpg"
                                }
                            },
                            {
                                "data": {
                                    "name": "cli.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
                                }
                            },
                            {
                                "data": {
                                    "name": "mobile.app",
                                    "size": "5mb",
                                    "type": "Application",
                                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "name": "editor.app",
                            "size": "25mb",
                            "type": "Application",
                            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
                        }
                    },
                    {
                        "data": {
                            "name": "settings.app",
                            "size": "50mb",
                            "type": "Application",
                            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
                        }
                    }
                ]
            },
            {
                "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
                "children": [
                    {
                        "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
                        "children": [
                            {
                                "data": {
                                    "name": "angular.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://img.icons8.com/color/1200/angularjs.jpg"
                                }
                            },
                            {
                                "data": {
                                    "name": "cli.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
                                }
                            },
                            {
                                "data": {
                                    "name": "mobile.app",
                                    "size": "5mb",
                                    "type": "Application",
                                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "name": "editor.app",
                            "size": "25mb",
                            "type": "Application",
                            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
                        }
                    },
                    {
                        "data": {
                            "name": "settings.app",
                            "size": "50mb",
                            "type": "Application",
                            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
                        }
                    }
                ]
            },
            {
                "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
                "children": [
                    {
                        "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
                        "children": [
                            {
                                "data": {
                                    "name": "angular.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://img.icons8.com/color/1200/angularjs.jpg"
                                }
                            },
                            {
                                "data": {
                                    "name": "cli.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
                                }
                            },
                            {
                                "data": {
                                    "name": "mobile.app",
                                    "size": "5mb",
                                    "type": "Application",
                                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "name": "editor.app",
                            "size": "25mb",
                            "type": "Application",
                            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
                        }
                    },
                    {
                        "data": {
                            "name": "settings.app",
                            "size": "50mb",
                            "type": "Application",
                            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
                        }
                    }
                ]
            },
            {
                "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
                "children": [
                    {
                        "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
                        "children": [
                            {
                                "data": {
                                    "name": "angular.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://img.icons8.com/color/1200/angularjs.jpg"
                                }
                            },
                            {
                                "data": {
                                    "name": "cli.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
                                }
                            },
                            {
                                "data": {
                                    "name": "mobile.app",
                                    "size": "5mb",
                                    "type": "Application",
                                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "name": "editor.app",
                            "size": "25mb",
                            "type": "Application",
                            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
                        }
                    },
                    {
                        "data": {
                            "name": "settings.app",
                            "size": "50mb",
                            "type": "Application",
                            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
                        }
                    }
                ]
            },
            {
                "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
                "children": [
                    {
                        "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
                        "children": [
                            {
                                "data": {
                                    "name": "angular.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://img.icons8.com/color/1200/angularjs.jpg"
                                }
                            },
                            {
                                "data": {
                                    "name": "cli.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
                                }
                            },
                            {
                                "data": {
                                    "name": "mobile.app",
                                    "size": "5mb",
                                    "type": "Application",
                                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "name": "editor.app",
                            "size": "25mb",
                            "type": "Application",
                            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
                        }
                    },
                    {
                        "data": {
                            "name": "settings.app",
                            "size": "50mb",
                            "type": "Application",
                            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
                        }
                    }
                ]
            },
            {
                "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
                "children": [
                    {
                        "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
                        "children": [
                            {
                                "data": {
                                    "name": "angular.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://img.icons8.com/color/1200/angularjs.jpg"
                                }
                            },
                            {
                                "data": {
                                    "name": "cli.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
                                }
                            },
                            {
                                "data": {
                                    "name": "mobile.app",
                                    "size": "5mb",
                                    "type": "Application",
                                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "name": "editor.app",
                            "size": "25mb",
                            "type": "Application",
                            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
                        }
                    },
                    {
                        "data": {
                            "name": "settings.app",
                            "size": "50mb",
                            "type": "Application",
                            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
                        }
                    }
                ]
            },
            {
                "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
                "children": [
                    {
                        "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
                        "children": [
                            {
                                "data": {
                                    "name": "angular.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://img.icons8.com/color/1200/angularjs.jpg"
                                }
                            },
                            {
                                "data": {
                                    "name": "cli.app",
                                    "size": "10mb",
                                    "type": "Application",
                                    "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
                                }
                            },
                            {
                                "data": {
                                    "name": "mobile.app",
                                    "size": "5mb",
                                    "type": "Application",
                                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "name": "editor.app",
                            "size": "25mb",
                            "type": "Application",
                            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
                        }
                    },
                    {
                        "data": {
                            "name": "settings.app",
                            "size": "50mb",
                            "type": "Application",
                            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
                        }
                    }
                ]
            },
        ]
    }

    getTreeTableNodes() {
        return Promise.resolve(this.getTreeTableNodesData());
    }

    getTreeNodes() {
        return Promise.resolve(this.getTreeNodesData());
    }

    getFiles() {
        return Promise.resolve(this.getTreeNodesData());
    }

    getLazyFiles() {
        return Promise.resolve(this.getLazyNodesData());
    }

    getFilesystem() {
        return Promise.resolve(this.getFileSystemNodesData());
    }

    getProductsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Black Watch',
                description: 'Product Description',
                image: 'black-watch.jpg',
                price: 72,
                category: 'Accessories',
                quantity: 61,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'Blue Band',
                description: 'Product Description',
                image: 'blue-band.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'Blue T-Shirt',
                description: 'Product Description',
                image: 'blue-t-shirt.jpg',
                price: 29,
                category: 'Clothing',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'Bracelet',
                description: 'Product Description',
                image: 'bracelet.jpg',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1005',
                code: 'av2231fwg',
                name: 'Brown Purse',
                description: 'Product Description',
                image: 'brown-purse.jpg',
                price: 120,
                category: 'Accessories',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4
            },
            {
                id: '1006',
                code: 'bib36pfvm',
                name: 'Chakra Bracelet',
                description: 'Product Description',
                image: 'chakra-bracelet.jpg',
                price: 32,
                category: 'Accessories',
                quantity: 5,
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1007',
                code: 'mbvjkgip5',
                name: 'Galaxy Earrings',
                description: 'Product Description',
                image: 'galaxy-earrings.jpg',
                price: 34,
                category: 'Accessories',
                quantity: 23,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1008',
                code: 'vbb124btr',
                name: 'Game Controller',
                description: 'Product Description',
                image: 'game-controller.jpg',
                price: 99,
                category: 'Electronics',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 4
            },
            {
                id: '1009',
                code: 'cm230f032',
                name: 'Gaming Set',
                description: 'Product Description',
                image: 'gaming-set.jpg',
                price: 299,
                category: 'Electronics',
                quantity: 63,
                inventoryStatus: 'INSTOCK',
                rating: 3
            },
            {
                id: '1010',
                code: 'plb34234v',
                name: 'Gold Phone Case',
                description: 'Product Description',
                image: 'gold-phone-case.jpg',
                price: 24,
                category: 'Accessories',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4
            },
            {
                id: '1011',
                code: '4920nnc2d',
                name: 'Green Earbuds',
                description: 'Product Description',
                image: 'green-earbuds.jpg',
                price: 89,
                category: 'Electronics',
                quantity: 23,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1012',
                code: '250vm23cc',
                name: 'Green T-Shirt',
                description: 'Product Description',
                image: 'green-t-shirt.jpg',
                price: 49,
                category: 'Clothing',
                quantity: 74,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1013',
                code: 'fldsmn31b',
                name: 'Grey T-Shirt',
                description: 'Product Description',
                image: 'grey-t-shirt.jpg',
                price: 48,
                category: 'Clothing',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 3
            },
            {
                id: '1014',
                code: 'waas1x2as',
                name: 'Headphones',
                description: 'Product Description',
                image: 'headphones.jpg',
                price: 175,
                category: 'Electronics',
                quantity: 8,
                inventoryStatus: 'LOWSTOCK',
                rating: 5
            },
            {
                id: '1015',
                code: 'vb34btbg5',
                name: 'Light Green T-Shirt',
                description: 'Product Description',
                image: 'light-green-t-shirt.jpg',
                price: 49,
                category: 'Clothing',
                quantity: 34,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1016',
                code: 'k8l6j58jl',
                name: 'Lime Band',
                description: 'Product Description',
                image: 'lime-band.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 12,
                inventoryStatus: 'INSTOCK',
                rating: 3
            },
            {
                id: '1017',
                code: 'v435nn85n',
                name: 'Mini Speakers',
                description: 'Product Description',
                image: 'mini-speakers.jpg',
                price: 85,
                category: 'Clothing',
                quantity: 42,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1018',
                code: '09zx9c0zc',
                name: 'Painted Phone Case',
                description: 'Product Description',
                image: 'painted-phone-case.jpg',
                price: 56,
                category: 'Accessories',
                quantity: 41,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1019',
                code: 'mnb5mb2m5',
                name: 'Pink Band',
                description: 'Product Description',
                image: 'pink-band.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 63,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1020',
                code: 'r23fwf2w3',
                name: 'Pink Purse',
                description: 'Product Description',
                image: 'pink-purse.jpg',
                price: 110,
                category: 'Accessories',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4
            },
            {
                id: '1021',
                code: 'pxpzczo23',
                name: 'Purple Band',
                description: 'Product Description',
                image: 'purple-band.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 6,
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1022',
                code: '2c42cb5cb',
                name: 'Purple Gemstone Necklace',
                description: 'Product Description',
                image: 'purple-gemstone-necklace.jpg',
                price: 45,
                category: 'Accessories',
                quantity: 62,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1023',
                code: '5k43kkk23',
                name: 'Purple T-Shirt',
                description: 'Product Description',
                image: 'purple-t-shirt.jpg',
                price: 49,
                category: 'Clothing',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 5
            },
            {
                id: '1024',
                code: 'lm2tny2k4',
                name: 'Shoes',
                description: 'Product Description',
                image: 'shoes.jpg',
                price: 64,
                category: 'Clothing',
                quantity: 0,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1025',
                code: 'nbm5mv45n',
                name: 'Sneakers',
                description: 'Product Description',
                image: 'sneakers.jpg',
                price: 78,
                category: 'Clothing',
                quantity: 52,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1026',
                code: 'zx23zc42c',
                name: 'Teal T-Shirt',
                description: 'Product Description',
                image: 'teal-t-shirt.jpg',
                price: 49,
                category: 'Clothing',
                quantity: 3,
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1027',
                code: 'acvx872gc',
                name: 'Yellow Earbuds',
                description: 'Product Description',
                image: 'yellow-earbuds.jpg',
                price: 89,
                category: 'Electronics',
                quantity: 35,
                inventoryStatus: 'INSTOCK',
                rating: 3
            },
            {
                id: '1028',
                code: 'tx125ck42',
                name: 'Yoga Mat',
                description: 'Product Description',
                image: 'yoga-mat.jpg',
                price: 20,
                category: 'Fitness',
                quantity: 15,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1029',
                code: 'gwuby345v',
                name: 'Yoga Set',
                description: 'Product Description',
                image: 'yoga-set.jpg',
                price: 20,
                category: 'Fitness',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
                rating: 8
            }
        ];
    }

    getProductsWithOrdersData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1000-0',
                        productCode: 'f230fh0g3',
                        date: '2020-09-13',
                        amount: 65,
                        quantity: 1,
                        customer: 'David James',
                        status: 'PENDING'
                    },
                    {
                        id: '1000-1',
                        productCode: 'f230fh0g3',
                        date: '2020-05-14',
                        amount: 130,
                        quantity: 2,
                        customer: 'Leon Rodrigues',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1000-2',
                        productCode: 'f230fh0g3',
                        date: '2019-01-04',
                        amount: 65,
                        quantity: 1,
                        customer: 'Juan Alejandro',
                        status: 'RETURNED'
                    },
                    {
                        id: '1000-3',
                        productCode: 'f230fh0g3',
                        date: '2020-09-13',
                        amount: 195,
                        quantity: 3,
                        customer: 'Claire Morrow',
                        status: 'CANCELLED'
                    }
                ]
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Black Watch',
                description: 'Product Description',
                image: 'black-watch.jpg',
                price: 72,
                category: 'Accessories',
                quantity: 61,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1001-0',
                        productCode: 'nvklal433',
                        date: '2020-05-14',
                        amount: 72,
                        quantity: 1,
                        customer: 'Maisha Jefferson',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1001-1',
                        productCode: 'nvklal433',
                        date: '2020-02-28',
                        amount: 144,
                        quantity: 2,
                        customer: 'Octavia Murillo',
                        status: 'PENDING'
                    }
                ]
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'Blue Band',
                description: 'Product Description',
                image: 'blue-band.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1002-0',
                        productCode: 'zz21cz3c1',
                        date: '2020-07-05',
                        amount: 79,
                        quantity: 1,
                        customer: 'Stacey Leja',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1002-1',
                        productCode: 'zz21cz3c1',
                        date: '2020-02-06',
                        amount: 79,
                        quantity: 1,
                        customer: 'Ashley Wickens',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'Blue T-Shirt',
                description: 'Product Description',
                image: 'blue-t-shirt.jpg',
                price: 29,
                category: 'Clothing',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: []
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'Bracelet',
                description: 'Product Description',
                image: 'bracelet.jpg',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1004-0',
                        productCode: 'h456wer53',
                        date: '2020-09-05',
                        amount: 60,
                        quantity: 4,
                        customer: 'Mayumi Misaki',
                        status: 'PENDING'
                    },
                    {
                        id: '1004-1',
                        productCode: 'h456wer53',
                        date: '2019-04-16',
                        amount: 2,
                        quantity: 30,
                        customer: 'Francesco Salvatore',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1005',
                code: 'av2231fwg',
                name: 'Brown Purse',
                description: 'Product Description',
                image: 'brown-purse.jpg',
                price: 120,
                category: 'Accessories',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1005-0',
                        productCode: 'av2231fwg',
                        date: '2020-01-25',
                        amount: 120,
                        quantity: 1,
                        customer: 'Isabel Sinclair',
                        status: 'RETURNED'
                    },
                    {
                        id: '1005-1',
                        productCode: 'av2231fwg',
                        date: '2019-03-12',
                        amount: 240,
                        quantity: 2,
                        customer: 'Lionel Clifford',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1005-2',
                        productCode: 'av2231fwg',
                        date: '2019-05-05',
                        amount: 120,
                        quantity: 1,
                        customer: 'Cody Chavez',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1006',
                code: 'bib36pfvm',
                name: 'Chakra Bracelet',
                description: 'Product Description',
                image: 'chakra-bracelet.jpg',
                price: 32,
                category: 'Accessories',
                quantity: 5,
                inventoryStatus: 'LOWSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1006-0',
                        productCode: 'bib36pfvm',
                        date: '2020-02-24',
                        amount: 32,
                        quantity: 1,
                        customer: 'Arvin Darci',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1006-1',
                        productCode: 'bib36pfvm',
                        date: '2020-01-14',
                        amount: 64,
                        quantity: 2,
                        customer: 'Izzy Jones',
                        status: 'PENDING'
                    }
                ]
            },
            {
                id: '1007',
                code: 'mbvjkgip5',
                name: 'Galaxy Earrings',
                description: 'Product Description',
                image: 'galaxy-earrings.jpg',
                price: 34,
                category: 'Accessories',
                quantity: 23,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1007-0',
                        productCode: 'mbvjkgip5',
                        date: '2020-06-19',
                        amount: 34,
                        quantity: 1,
                        customer: 'Jennifer Smith',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1008',
                code: 'vbb124btr',
                name: 'Game Controller',
                description: 'Product Description',
                image: 'game-controller.jpg',
                price: 99,
                category: 'Electronics',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1008-0',
                        productCode: 'vbb124btr',
                        date: '2020-01-05',
                        amount: 99,
                        quantity: 1,
                        customer: 'Jeanfrancois David',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1008-1',
                        productCode: 'vbb124btr',
                        date: '2020-01-19',
                        amount: 198,
                        quantity: 2,
                        customer: 'Ivar Greenwood',
                        status: 'RETURNED'
                    }
                ]
            },
            {
                id: '1009',
                code: 'cm230f032',
                name: 'Gaming Set',
                description: 'Product Description',
                image: 'gaming-set.jpg',
                price: 299,
                category: 'Electronics',
                quantity: 63,
                inventoryStatus: 'INSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1009-0',
                        productCode: 'cm230f032',
                        date: '2020-06-24',
                        amount: 299,
                        quantity: 1,
                        customer: 'Kadeem Mujtaba',
                        status: 'PENDING'
                    },
                    {
                        id: '1009-1',
                        productCode: 'cm230f032',
                        date: '2020-05-11',
                        amount: 299,
                        quantity: 1,
                        customer: 'Ashley Wickens',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1009-2',
                        productCode: 'cm230f032',
                        date: '2019-02-07',
                        amount: 299,
                        quantity: 1,
                        customer: 'Julie Johnson',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1009-3',
                        productCode: 'cm230f032',
                        date: '2020-04-26',
                        amount: 299,
                        quantity: 1,
                        customer: 'Tony Costa',
                        status: 'CANCELLED'
                    }
                ]
            },
            {
                id: '1010',
                code: 'plb34234v',
                name: 'Gold Phone Case',
                description: 'Product Description',
                image: 'gold-phone-case.jpg',
                price: 24,
                category: 'Accessories',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1010-0',
                        productCode: 'plb34234v',
                        date: '2020-02-04',
                        amount: 24,
                        quantity: 1,
                        customer: 'James Butt',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1010-1',
                        productCode: 'plb34234v',
                        date: '2020-05-05',
                        amount: 48,
                        quantity: 2,
                        customer: 'Josephine Darakjy',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1011',
                code: '4920nnc2d',
                name: 'Green Earbuds',
                description: 'Product Description',
                image: 'green-earbuds.jpg',
                price: 89,
                category: 'Electronics',
                quantity: 23,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1011-0',
                        productCode: '4920nnc2d',
                        date: '2020-06-01',
                        amount: 89,
                        quantity: 1,
                        customer: 'Art Venere',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1012',
                code: '250vm23cc',
                name: 'Green T-Shirt',
                description: 'Product Description',
                image: 'green-t-shirt.jpg',
                price: 49,
                category: 'Clothing',
                quantity: 74,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1012-0',
                        productCode: '250vm23cc',
                        date: '2020-02-05',
                        amount: 49,
                        quantity: 1,
                        customer: 'Lenna Paprocki',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1012-1',
                        productCode: '250vm23cc',
                        date: '2020-02-15',
                        amount: 49,
                        quantity: 1,
                        customer: 'Donette Foller',
                        status: 'PENDING'
                    }
                ]
            },
            {
                id: '1013',
                code: 'fldsmn31b',
                name: 'Grey T-Shirt',
                description: 'Product Description',
                image: 'grey-t-shirt.jpg',
                price: 48,
                category: 'Clothing',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1013-0',
                        productCode: 'fldsmn31b',
                        date: '2020-04-01',
                        amount: 48,
                        quantity: 1,
                        customer: 'Simona Morasca',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1014',
                code: 'waas1x2as',
                name: 'Headphones',
                description: 'Product Description',
                image: 'headphones.jpg',
                price: 175,
                category: 'Electronics',
                quantity: 8,
                inventoryStatus: 'LOWSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1014-0',
                        productCode: 'waas1x2as',
                        date: '2020-05-15',
                        amount: 175,
                        quantity: 1,
                        customer: 'Lenna Paprocki',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1014-1',
                        productCode: 'waas1x2as',
                        date: '2020-01-02',
                        amount: 175,
                        quantity: 1,
                        customer: 'Donette Foller',
                        status: 'CANCELLED'
                    }
                ]
            },
            {
                id: '1015',
                code: 'vb34btbg5',
                name: 'Light Green T-Shirt',
                description: 'Product Description',
                image: 'light-green-t-shirt.jpg',
                price: 49,
                category: 'Clothing',
                quantity: 34,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1015-0',
                        productCode: 'vb34btbg5',
                        date: '2020-07-02',
                        amount: 98,
                        quantity: 2,
                        customer: 'Mitsue Tollner',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1016',
                code: 'k8l6j58jl',
                name: 'Lime Band',
                description: 'Product Description',
                image: 'lime-band.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 12,
                inventoryStatus: 'INSTOCK',
                rating: 3,
                orders: []
            },
            {
                id: '1017',
                code: 'v435nn85n',
                name: 'Mini Speakers',
                description: 'Product Description',
                image: 'mini-speakers.jpg',
                price: 85,
                category: 'Clothing',
                quantity: 42,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1017-0',
                        productCode: 'v435nn85n',
                        date: '2020-07-12',
                        amount: 85,
                        quantity: 1,
                        customer: 'Minna Amigon',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1018',
                code: '09zx9c0zc',
                name: 'Painted Phone Case',
                description: 'Product Description',
                image: 'painted-phone-case.jpg',
                price: 56,
                category: 'Accessories',
                quantity: 41,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1018-0',
                        productCode: '09zx9c0zc',
                        date: '2020-07-01',
                        amount: 56,
                        quantity: 1,
                        customer: 'Abel Maclead',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1018-1',
                        productCode: '09zx9c0zc',
                        date: '2020-05-02',
                        amount: 56,
                        quantity: 1,
                        customer: 'Minna Amigon',
                        status: 'RETURNED'
                    }
                ]
            },
            {
                id: '1019',
                code: 'mnb5mb2m5',
                name: 'Pink Band',
                description: 'Product Description',
                image: 'pink-band.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 63,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: []
            },
            {
                id: '1020',
                code: 'r23fwf2w3',
                name: 'Pink Purse',
                description: 'Product Description',
                image: 'pink-purse.jpg',
                price: 110,
                category: 'Accessories',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1020-0',
                        productCode: 'r23fwf2w3',
                        date: '2020-05-29',
                        amount: 110,
                        quantity: 1,
                        customer: 'Kiley Caldarera',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1020-1',
                        productCode: 'r23fwf2w3',
                        date: '2020-02-11',
                        amount: 220,
                        quantity: 2,
                        customer: 'Graciela Ruta',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1021',
                code: 'pxpzczo23',
                name: 'Purple Band',
                description: 'Product Description',
                image: 'purple-band.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 6,
                inventoryStatus: 'LOWSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1021-0',
                        productCode: 'pxpzczo23',
                        date: '2020-02-02',
                        amount: 79,
                        quantity: 1,
                        customer: 'Cammy Albares',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1022',
                code: '2c42cb5cb',
                name: 'Purple Gemstone Necklace',
                description: 'Product Description',
                image: 'purple-gemstone-necklace.jpg',
                price: 45,
                category: 'Accessories',
                quantity: 62,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1022-0',
                        productCode: '2c42cb5cb',
                        date: '2020-06-29',
                        amount: 45,
                        quantity: 1,
                        customer: 'Mattie Poquette',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1022-1',
                        productCode: '2c42cb5cb',
                        date: '2020-02-11',
                        amount: 135,
                        quantity: 3,
                        customer: 'Meaghan Garufi',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1023',
                code: '5k43kkk23',
                name: 'Purple T-Shirt',
                description: 'Product Description',
                image: 'purple-t-shirt.jpg',
                price: 49,
                category: 'Clothing',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1023-0',
                        productCode: '5k43kkk23',
                        date: '2020-04-15',
                        amount: 49,
                        quantity: 1,
                        customer: 'Gladys Rim',
                        status: 'RETURNED'
                    }
                ]
            },
            {
                id: '1024',
                code: 'lm2tny2k4',
                name: 'Shoes',
                description: 'Product Description',
                image: 'shoes.jpg',
                price: 64,
                category: 'Clothing',
                quantity: 0,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: []
            },
            {
                id: '1025',
                code: 'nbm5mv45n',
                name: 'Sneakers',
                description: 'Product Description',
                image: 'sneakers.jpg',
                price: 78,
                category: 'Clothing',
                quantity: 52,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1025-0',
                        productCode: 'nbm5mv45n',
                        date: '2020-02-19',
                        amount: 78,
                        quantity: 1,
                        customer: 'Yuki Whobrey',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1025-1',
                        productCode: 'nbm5mv45n',
                        date: '2020-05-21',
                        amount: 78,
                        quantity: 1,
                        customer: 'Fletcher Flosi',
                        status: 'PENDING'
                    }
                ]
            },
            {
                id: '1026',
                code: 'zx23zc42c',
                name: 'Teal T-Shirt',
                description: 'Product Description',
                image: 'teal-t-shirt.jpg',
                price: 49,
                category: 'Clothing',
                quantity: 3,
                inventoryStatus: 'LOWSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1026-0',
                        productCode: 'zx23zc42c',
                        date: '2020-04-24',
                        amount: 98,
                        quantity: 2,
                        customer: 'Bette Nicka',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1027',
                code: 'acvx872gc',
                name: 'Yellow Earbuds',
                description: 'Product Description',
                image: 'yellow-earbuds.jpg',
                price: 89,
                category: 'Electronics',
                quantity: 35,
                inventoryStatus: 'INSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1027-0',
                        productCode: 'acvx872gc',
                        date: '2020-01-29',
                        amount: 89,
                        quantity: 1,
                        customer: 'Veronika Inouye',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1027-1',
                        productCode: 'acvx872gc',
                        date: '2020-06-11',
                        amount: 89,
                        quantity: 1,
                        customer: 'Willard Kolmetz',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1028',
                code: 'tx125ck42',
                name: 'Yoga Mat',
                description: 'Product Description',
                image: 'yoga-mat.jpg',
                price: 20,
                category: 'Fitness',
                quantity: 15,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: []
            },
            {
                id: '1029',
                code: 'gwuby345v',
                name: 'Yoga Set',
                description: 'Product Description',
                image: 'yoga-set.jpg',
                price: 20,
                category: 'Fitness',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
                rating: 8,
                orders: [
                    {
                        id: '1029-0',
                        productCode: 'gwuby345v',
                        date: '2020-02-14',
                        amount: 4,
                        quantity: 80,
                        customer: 'Maryann Royster',
                        status: 'DELIVERED'
                    }
                ]
            }
        ];
    }

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    }

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    }

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    }

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }

}
