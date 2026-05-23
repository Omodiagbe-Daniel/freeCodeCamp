#!/usr/bin/node

function normalizeUnits(manifest) {
  const newManifest = { ...manifest };

  if (newManifest.unit === "lb") {
    newManifest.weight = newManifest.weight * 0.453592;
    newManifest.unit = "kg";
  }

  return newManifest;
}

function validateManifest(manifest) {
  if (typeof manifest !== "object" || manifest === null) {
    manifest = {};
  }

  const errors = {};

  // containerId
  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  // destination
  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  // weight
  if (!("weight" in manifest)) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  // unit
  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else if (
    manifest.unit !== "kg" &&
    manifest.unit !== "lb"
  ) {
    errors.unit = "Invalid";
  }

  // hazmat
  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const validator = validateManifest(manifest);

  if (Object.keys(validator).length === 0) {
    const newManifest = { ...manifest };

    console.log(`Validation success: ${newManifest.containerId}`);

    const normalized = normalizeUnits(newManifest);

    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validator);
  }
}
