var diagram_components =
{
  "cim:DiagramObject":
  {
    "items":
    [
      {
        "name": "Diagram",
        "inputName": "[cim:DiagramObject.Diagram].rdf:resource",
        "realName": "cim:DiagramObject.Diagram",
        "type": "text"
      },
      {
        "name": "IdentifiedObject",
        "inputName": "[cim:DiagramObject.IdentifiedObject].rdf:resource",
        "realName": "cim:DiagramObject.IdentifiedObject",
        "type": "text"
      },
      {
        "name": "rotation",
        "inputName": "[cim:DiagramObject.rotation]",
        "realName": "cim:DiagramObject.rotation",
        "labelText": "rotation",
        "title": "rotation",
        "type": "text"
      },
      {
        "name": "Name",
        "inputName": "[cim:IdentifiedObject.name]",
        "realName": "cim:IdentifiedObject.name",
        "labelText": "Name",
        "title": "Name",
        "type": "text"
      },
    ]
  },
  "cim:DiagramObjectPoint":
  {
    "items":
    [
      {
        "name": "object",
        "inputName":"[cim:DiagramObjectPoint.DiagramObject].rdf:resource",
      },
      {
        "name": "sequenceNumber",
        "inputName" :"[cim:DiagramObjectPoint.sequenceNumber]",
      },
      {
        "name": "x",
        "inputName":"[cim:DiagramObjectPoint.xPosition]",
      },
      {
        "name": "y",
        "inputName":"[cim:DiagramObjectPoint.yPosition]",
      },
    ]
  }
};
