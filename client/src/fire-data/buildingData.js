module.exports = {
    info: [
        {
            id: 1,
            name: 'Type I', 
            path: '/fire/building-types/type-1', 
            data: [
                {
                    characteristics: [
                        '<b style="font-size: 24px"> <center> Characteristics </center> </b>',
                        '<center style="font-size: 18px"> Type I buildings are usually high-rises made of noncombustible or limited combustible material. These structures have structural members including: walls, columns, beams, floors and roofs. </center>',
                        '<center style="font-size: 18px"> Type I buildings have fire resistive compartmentation characteristics provided by partitions. Floors slow the spread of fire through the building and are able to confine fire to a certain area. </center>',
                        '<center style="font-size: 18px"> Type I buildings usually have self-pressurizing stairwells and HVAC systems that aid air movement. Many of the buildings that fall into this category will have elevators and control panels to manage fire doors. Type I buildings provide the highest level of protection from fire development and spread as well as collapse. Type I buildings are expected to remain structurally stable during a fire due to protected steel. </center>',
                        '<center style="font-size: 18px"> Type I buildings will not burn, however, the structure will degrade from fire and heat. The degree of degradation will depend on building material, amount/intensity of heat, duration of impingement and contents of the structure. </center>'
                    ],
                    materials: [
                        '<b style="font-size: 24px"> <center> Materials </center> <b>',
                        '<center style="font-size: 18px"><li>Noncombustible or limited combustible material</li> <li>Usually protected steel or concrete</li></center>'
                    ],
                    hazards: [
                        '<b style="font-size: 24px"> <center> Hazards </center> </b>',
                        '<center style="font-size: 18px"><li>Contents</li> <li>Ventilation</li> <li>Openings made in partitions</li> <li>Improperly designed HVAC systems</li></center>'
                   ],
                    stackEffect: [
                         '<b style="font-size: 24px"> <center> Stack Effect </center> </b>',
                         '<center style="font-size: 18px"> The Stack effect is the temperature difference between the temperature inside of the structure. The difference will cause the air within the structure to rise or fall depending on the variation between the two. Air movement becomes apparent in structures over 60 feet and more distinct as the structure increases in height. The taller the building, the greater the temperature difference. If the temperature inside of the building is cooler than the temperature outside, air current within the building will be driven downward. </center>',
                         '<center style="font-size: 18px"> The opposite also applies, if the temperature inside the building is warmer than the temperature outside, air current within the building will be driven upward. </center>',
                         '<center style="font-size: 18px"> The contrast in pressure forces warmer air in a building upward until it reaches a point within the building where the temperature is equal and the density of the air is balanced. The point of equilibrium is known as the stratification location. Air will flow upward and then horizontally at this point which will cause fire and smoke to spread laterally. In most cases, it happens in the middle of the building as the pressures equalize. </center>',
                         '<center style="font-size: 18px"> Smoke is influenced by the stack effect and will be drawn toward any shaft or stairwell. On higher floors, air movement draws fire and smoke away from shafts or stairwells toward the exterior of the building. In cases in which fires occur within the location of stratification, the stack effect has little effect on smoke movement. </center>',
                    ],
                    ventilation: [
                         '<b style="font-size: 24px"> <center> Ventilation </center> </b>',
                         '<center style="font-size: 18px"> Prior to 1960, Type I high rises had windows that opened. After 1960, Type I high rise buildings are constructed as sealed structures, meaning that windows may be non-operational, causing them to be very difficult to penetrate. Roofs are extremely difficult to penetrate. Firefighting operations must be coordinated in order to successfully ventilate a high rise structure. HVAC systems, sky lights, scuttle hatches and stairwells may be utilized for ventilation operations. When using stairwells, ensure that a separate stairwell is designated for civilian egress. </center>'
                    ],
                    burnTime: [
                        '<b style="font-size: 24px"> <center> Burn Time </center> </b>',
                        '<center style="font-size: 18px"> Structural components such as floors, walls and ceilings are fire resistive up to 3 to 4 hours depending on materials and components. </center>'
                   ],
                   sizeUp: [
                       '<b style="font-size: 24px"> <center> Size Up </center> </b>',
                       '<center style="font-size: 18px"> <li>Age of the structure</li> <li>Building materials</li> <li>Roof type</li> <li>Structure modifications</li> <li>Occupancy</li> <li>Size</li> <li>Height of structure/number of stories</li> <li> <b>Dead Load</b> - weights of materials of the structure (framing, flooring, roofing, etc.) and the weight of fixed service equipment (HVAC, plumbing, etc.) </li></center>'
                    ]
                   
                }
            ]
        },
        {
            id: 2,
            name: "Type II", 
            path: '/fire/building-types/type-2', 
            data: [
                { 
                    characteristics: [
                        '<b style="font-size: 24px"> <center> Characteristics </center> </b>',
                        '<center style="font-size: 18px"> Type II buildings are constructed of components which do not contribute to fire growth. Although Type II structures are composed of metal framing, metal cladding, concrete or other non-combustible materials, they do not meet the same requirements as the materials and components of Type I structures. </center>',
                        '<center style="font-size: 18px"> Steel components used in Type II structures do not need to be protected with a spray-on fire proofing insulating barrier and do not have the same fire resistance rating as Type I structures. Type II structures are more prone to collapse due to lighter weight material and lower fire resistance ratings. These structures are used when the risk of fire expectancy is minimal or if fire suppression systems are engineered to accommodate the fuel load within the structure. </center>',
                        '<center style="font-size: 18px"> Although Type II buildings are considered noncombustible or limited combustible structures, lower fire ratings are allowed for roof systems and floors. Roofs, balconies and facades can be constructed of combustible material and can ignite, resulting in fire spread. </center>',
                        '<center style="font-size: 18px"> Generally, Type II structures have flat roofs with combustible felt, insulation and roofing tar. </center>'
                    ],
                    materials: [
                        '<b style="font-size: 24px"> <center> Materials </center> <b>',
                        '<center style="font-size: 18px"> Noncombustible or limited combustible materials, metal framing members, metal cladding, concrete block, asphalt and foam insulation. </center>'
                    ],
                    hazards: [
                        '<b style="font-size: 24px"> <center> Hazards </center> </b>',
                        '<center style="font-size: 18px"><li>Roof Contents</li> <li>Roof Ventilation</li> <li>Collapse</li> <li>Fire Inside of Walls</li></center>'
                   ],
                    collapse: [
                         '<b style="font-size: 24px"> <center> Collapse </center> </b>',
                         '<center style="font-size: 18px"> The following factors are key indicators to help identify the potential for structural collapse: </center>',
                         '<center style="font-size: 18px"> <li>Collapse</li> <li>Ventilation</li> <li>Contents within the structure</li> <li>Duration and intensity of fire</li> <li>Stage of the fire</li> <li>The quantity of water used to extinguish the fire</li> <li>Alterations made to the structure</li> <li>Additions made to the structure</li> <li>Age of the structure<li> <li>Weather</li> <li>Dead loads</li> <li>Live loads</li> </center>',
                         '<center style="font-size: 18px"> When unprotected steel is exposed to temperatures in excess of 1,000°F, it will expand, become distorted and twist. Once the materials warp and degrade, walls and floors are prone to collapse. Structures that contain brick and block walls which support unprotected steel joists and I-beams account for a significant number of these collapses. </center>',
                         '<center style="font-size: 18px"> When conducting firefighting operations, a collapse zone should be established to ensure firefighter personnel safety. A collapse zone should be established at the corner of the building, approximately <b>1.5x</b> the height of the structure. </center>',
                    ],
                    burnTime: [
                        '<b style="font-size: 24px"> <center> Burn Time </center> </b>',
                        '<center style="font-size: 18px"> Structural components such as floors, walls and ceilings are fire resistive up to <b>1 to 2 hours</b> depending on materials and components. </center>'
                    ],
                    sizeUp: [
                       '<b style="font-size: 24px"> <center> Size Up </center> </b>',
                       '<center style="font-size: 18px"> <li>Age of the structure</li> <li>Building materials</li> <li>Roof type</li> <li>Structure modifications</li> <li>Dead load</li> <li>Height of structure/number of stories</li> <li>Exposures</li> <li>Apparatus Placement</li> <li>Collapse zone</li> <li>Suppression systems</li> </center>'
                    ],
                  
                },
            ]
        },
        {
            id: 3,
            name: "Type III", 
            path: '/fire/building-types/type-3', 
            data: [
                { 
                    characteristics: [
                        '<b style="font-size: 24px"> <center> Characteristics </center> </b>',
                        '<center style="font-size: 18px"> Type III structures have exterior walls and structural members made of noncombustible materials. The partition walls and load bearing walls may contain combustible material. Interior walls, beams, floors, columns, and roofs may be contructed of wood which can contribute to fire spread.  </center>',
                        '<center style="font-size: 18px"> Voids may be present in cocklofts, crawlspaces and between wall studs which also contribute to fire spread unless fire stops are installed to fill in void space. Many structures of this type have undergone renovation which can present a greater fire risk due to the creation fo large hidden voids above ceilings and below floors. During renovation, some structural components may have been modified, resulting in the reduction of load carrying capacity. Along with the potential of structural integrity failure, firefighters must aggressively extinguish roof fires to prevent roofs from collapsing and potentially causing fatalities. </center>',
                        '<center style="font-size: 18px"> Prefabricated wood truss systems similar to those used in Type V structures may also be used in Type III structures. When exposed to fire, these trusses may fail suddenly. Wood used as structural members are of a smaller dimension than that required for Type IV (heavy timber) construction. Under today’s standards, Type III structures are usually limited to six stories.  </center>',
                    ],
                    materials: [
                        '<b style="font-size: 24px"> <center> Materials </center> <b>',
                        '<center style="font-size: 18px"> Noncombustible or limited combustible materials (concrete and masonry), wood, gypsum, drywall and plaster. </center>'
                    ],
                    hazards: [
                        '<b style="font-size: 24px"> <center> Hazards </center> </b>',
                        '<center style="font-size: 18px"> <li>Contents</li> <li>Roof Ventilation</li> <li>Collapse</li> <li>Concealed spaces</li> <li>Combustible interior components</li> <li>Structural stability</li> </center>'
                   ],
                    renovation: [
                         '<b style="font-size: 24px"> <center> Renovation </center> </b>',
                         '<center style="font-size: 18px"> In Type III structures, one of the primary concerns is concealed spaces between walls, floors and ceilings. Fire and smoke can spread through these voids and contribute to fire growth. Many Type III structures have been renovated where structural components have been modified which can open up floor space and increase concealed spaces in floors, ceilings and walls.  </center>',
                         '<center style="font-size: 18px"> Modifications that are made can change the configuration of exit paths and load bearing walls. These renovations are made to meet the needs of the occupants. Each time a building is renovated, changes are made from its original design which may affect the building’s response to fire conditions. Many building occupants request to lower ceiling heights and if building code does not require the ceiling to be removed, many occupants will request to leave them in place to save renovation costs.  </center>',
                         '<center style="font-size: 18px"> Multiple ceiling areas are perfect locations for fire to spread overhead while firefighters are unaware of the hazard above. These hazards can lead to rapid fire growth and the potential for collapse. Type III structures can be identified as old schools, shopping centers and strip malls. </center>',
                    ],
                    burnTime: [
                        '<b style="font-size: 24px"> <center> Burn Time </center> </b>',
                        '<center style="font-size: 18px"> Wood other than heavy timber must have a fire resistive rating up to at least <b>1 hour</b>. </center>'
                    ],
                    sizeUp: [
                       '<b style="font-size: 24px"> <center> Size Up </center> </b>',
                       '<center style="font-size: 18px"> <li>Age of the structure</li> <li>Building materials</li> <li>Roof type</li> <li>Structure modifications</li> <li>Dead load</li> <li>Occupancy</li> <li>Concealed spaces</li> <li>Apparatus Placement</li> <li>Collapse zone</li> <li>Suppression systems</li> </center>'
                    ],
                }
            ]
        },
        {
            id: 4,
            name: "Type IV", 
            path: '/fire/building-types/type-4', 
            data: [
                { 
                    characteristics: [
                        '<b style="font-size: 24px"> <center> Characteristics </center> </b>',
                        '<center style="font-size: 18px"> Type IV structures are identified by the use of large dimension lumber. Generally, structural members are greater than 8 inches in dimension. Structural members of heavy timber must have a fire resistance rating of 2 hours and all other materials not manufactured of wood must have a fire resistance rating of at least 1 hour. Heavy timber construction is very resiliant and resistant to structural collapse.  </center>',
                        '<center style="font-size: 18px"> Concealed spaces between floors, walls and roofs are not permitted. However, occasional void spaces may be created when an old heavy timber mill is converted to a residential structure. </center>',
                        '<center style="font-size: 18px"> Many Type IV buildings contain noncombustible material on the exterior of the structure similar to that of a Type III building.  </center>',
                        '<center style="font-size: 18px"> Modernized Type IV structures may include small dimension lumber that is glued to form a laminated structural element. These are extremely strong and are frequently found in churches, auditoriums, barns and other large structures with curved ceilings.  </center>',
                    ],
                    materials: [
                        '<b style="font-size: 24px"> <center> Materials </center> <b>',
                        '<center style="font-size: 18px"> Noncombustible or limited combustible materials (concrete and masonry), solid or laminated wood. </center>'
                    ],
                    hazards: [
                        '<b style="font-size: 24px"> <center> Hazards </center> </b>',
                        '<center style="font-size: 18px"> <li>Contents and fuel</li> <li>Water supply/amount of water required</li> <li>High heat release potential</li> <li>Exposures</li> <li>Age of the structure</li> <li>Change in firefighting tactics</li> </center>'
                   ],
                    slowBurn: [
                         '<b style="font-size: 24px"> <center> Slow Burn </center> </b>',
                         '<center style="font-size: 18px"> Proponents of heavy timber structures advance the term slow burning as an advantage because of collapse resistance. Heavy timber structures may provide a fair measure of structural integrity during a fire if supporting materials and elements are equal to the timber’s fire resistance rating. It can be an advantage as long as the fire can be kept in offensive operations.  </center>',
                         '<center style="font-size: 18px"> Due to the heavy fuel load, a massive amount of heat will radiate from the structure. Firefighting operations will demand heavy caliber solid streams. Fog streams will be ineffective because the stream will dissipate before the surfaces is wetted. </center>',
                         '<center style="font-size: 18px"> The only defense against a fire in a Type IV structure is a fully operational sprinkler system. Exposures will need to be covered by additional personnel. Pre-planning will be advantageous to determine the best strategy for firefighting operations and tactics. </center>',
                    ],
                    burnTime: [
                        '<b style="font-size: 24px"> <center> Burn Time </center> </b>',
                        '<center style="font-size: 18px"> Materials other than heavy timber must have a fire resistive rating up to at least <b>1 hour</b>. Structural members of heavy timbers must have a fire resistive rating of at least <b>2 hours</b>. </center>'
                    ],
                    sizeUp: [
                       '<b style="font-size: 24px"> <center> Size Up </center> </b>',
                       '<center style="font-size: 18px"> <li>Age of the structure</li> <li>Building materials</li> <li>Roof type</li> <li>Water Supply</li> <li>Exposures</li> <li>Occupancy</li> <li>Apparatus Placement</li> <li>Suppression systems</li> <li>Need for additional crews</li> </center>'
                    ],
                }
            ]
        },
        {
            id: 5,
            name: "Type V", 
            path: '/fire/building-types/type-5',
            data: [
                {
                    characteristics: [
                        '<b style="font-size: 24px"> <center> Characteristics </center> </b>',
                        '<center style="font-size: 18px"> Type V structures consist of wood framing materials. Many Type V structures use prefabricated wood systems in place of solid floor joists. Exterior load bearing walls are constructed of wood and covered with stucco, brick or stone for aesthetic purposes. </center>',
                        '<center style="font-size: 18px"> The exterior covering (veneer) can give the structure the appearance of a Type III building. The veneer does not offer much fire protection and does not provide structural support. Different framing designs produce different outcomes in fire development. </center>',
                        '<center style="font-size: 18px"> Some framing styles do not have firestops which can affect fire growth. Generally, frames are constructed of 2x4 dimensional lumber with holes drilled in them for electrical, utility and communication lines which can contribute to fire spread. </center>',
                        '<center style="font-size: 18px"> Wood frame structures are the most combustible of the five building types. Due to the materials used in construction, Type V structures are prone to collapse.  </center>'
                    ],
                    materials: [
                        '<b style="font-size: 24px"> <center> Materials </center> <b>',
                        '<center style="font-size: 18px">Prefabricated wood trusses, 2x4 wood lumber, plywood, OSB (oriented strand board), composite wood and I-beams. </center>',
                        '<center style="font-size: 18px">Exterior: Aluminum siding, wood clapboards, sheet metal, shake shingles, cement, stucco, brick, stone, plastic/vinyl and asphalt </center>'
                    ],
                    hazards: [
                        '<b style="font-size: 24px"> <center> Hazards </center> </b>',
                        '<center style="font-size: 18px"><li>Contents</li> <li>Ventilation</li> <li>Openings made in partitions</li> <li>Improperly designed HVAC systems</li></center>'
                   ],
                    trusses: [
                         '<b style="font-size: 24px"> <center> Trusses </center> </b>',
                         '<center style="font-size: 18px"> A truss is a framed structure consisting of a triangle or group of triangles constructed in a manner that loads applied at the points of intersections will cause direct stress. Loads applied between these points cause bending stress. </center>',
                         '<center style="font-size: 18px"> Trusses can fail in different ways. All components and connections are essential to its stability. Any failure in the truss can compromise its structural integrity. Multiple truss failures can occur. One truss failure can impact the entire structure. </center>',
                         '<center style="font-size: 18px"> Poor design and maintenance affects the strength of trusses. Trusses are designed in a manner where the bottom chord is under tension and the top under compression. The design of a truss is similar to that of a chain, where one break triggers failure. </center>',
                    ],
                    burnTime: [
                        '<b style="font-size: 24px"> <center> Burn Time </center> </b>',
                        '<center style="font-size: 18px"> Type V structures present almost unlimited potential for fire extension withing the building. Burn time is contingent on the contents of the structure, frame type, voids, combustible furnishings and finishes and open spaces.   </center>'
                   ],
                   sizeUp: [
                       '<b style="font-size: 24px"> <center> Size Up </center> </b>',
                       '<center style="font-size: 18px"> <li>Age of the structure</li> <li>Building materials</li> <li>Roof type</li> <li>Contents</li> <li>Exposures</li> <li>Occupancy</li> <li>Number of stories (attic and 	basement)</li> <li>Hazmat</li> </center>'
                    ]
                }
            ]
        },
        
    ]
}