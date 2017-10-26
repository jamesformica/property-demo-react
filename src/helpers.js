export function canBeSaved(propertyToAdd, properties) {
    var existing = properties.find((property) => {
        return property.id === propertyToAdd.id
    });

    return existing === null || existing === undefined;
}